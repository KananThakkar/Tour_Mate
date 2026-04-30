import React, { useState } from "react";
import { useRef } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "./Maps&Navigation.css";

// 🎯 Custom Icons
const userIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/64/64113.png",
    iconSize: [30, 30]
});

const restaurantIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    iconSize: [30, 30]
});

const placeIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
    iconSize: [30, 30]
});

const MapsNavigation = () => {
    const [places, setPlaces] = useState([]);
    const [userLocation, setUserLocation] = useState(null);
    const [routeControl, setRouteControl] = useState(null);

    const mapRef = useRef();

    // 📍 Get User Location
    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const loc = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
                type: "user"
            };
            setUserLocation(loc);
            setPlaces([loc]);
        });
    };

    // 🍔 Nearby Restaurants
    const getRestaurants = async () => {
        if (!userLocation) return alert("Get location first");

        const query = `
[out:json];
node(around:2000,${userLocation.lat},${userLocation.lng})["amenity"="restaurant"];
out;
`;

        const res = await fetch("https://overpass-api.de/api/interpreter", {
            method: "POST",
            body: query
        });

        const data = await res.json();

        const restaurants = data.elements.map((p) => ({
            name: p.tags?.name || "Restaurant",
            lat: p.lat,
            lng: p.lon,
            type: "restaurant"
        }));

        setPlaces([userLocation, ...restaurants]);
    };

    // 🏛️ Nearby Tourist Places
    const getTouristPlaces = async () => {
        if (!userLocation) return alert("Get location first");

        const query = `
[out:json];
node(around:2000,${userLocation.lat},${userLocation.lng})["tourism"];
out;
`;

        const res = await fetch("https://overpass-api.de/api/interpreter", {
            method: "POST",
            body: query
        });

        const data = await res.json();

        const placesData = data.elements.map((p) => ({
            name: p.tags?.name || "Tourist Place",
            lat: p.lat,
            lng: p.lon,
            type: "place"
        }));

        setPlaces([userLocation, ...placesData]);
    };

    // 🧭 Route Navigation
    const showRoute = (destination) => {
        if (!userLocation) return alert("Get location first");

        

        const map = mapRef.current;


        if (!map) return;

        if (routeControl) {
            map.removeControl(routeControl);
        }

        const control = L.Routing.control({
            waypoints: [
                L.latLng(userLocation.lat, userLocation.lng),
                L.latLng(destination.lat, destination.lng)
            ],
            routeWhileDragging: false,
            router: L.Routing.osrmv1({
                serviceUrl: "https://router.project-osrm.org/route/v1"
            })
        }).addTo(map);

        control.on("routingerror", () => {
            alert("Route service busy. Try again later 🚧");
        });

        setRouteControl(control);
    };

    const getIcon = (type) => {
        if (type === "user") return userIcon;
        if (type === "restaurant") return restaurantIcon;
        return placeIcon;
    };

    const center = userLocation
        ? [userLocation.lat, userLocation.lng]
        : [20.5937, 78.9629];

    return (
        <div className="map-page">

            <h2>Maps & Navigation 🗺️</h2>

            {/* Buttons */}
            <div className="btn-container">
                <button onClick={getLocation}>📍 My Location</button>
                <button onClick={getRestaurants}>🍔 Restaurants</button>
                <button onClick={getTouristPlaces}>🏛️ Tourist Places</button>
            </div>

            {/* Map */}
            <MapContainer
                center={center}
                zoom={13}
                className="map-container"
                whenCreated={(map) => (mapRef.current = map)}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {places.map((place, i) => (
                    <Marker
                        key={i}
                        position={[place.lat, place.lng]}
                        icon={getIcon(place.type)}
                    >
                        <Popup>
                            <strong>{place.name}</strong><br />
                            <button onClick={() => showRoute(place)}>
                                Navigate 🧭
                            </button>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

        </div>
    );
};

export default MapsNavigation;