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
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

if (!L.Routing) {
    console.error("Leaflet Routing Machine not loaded properly");
}
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
    const [destination, setDestination] = useState("");
    const [destCoords, setDestCoords] = useState(null);
    const [routeInfo, setRouteInfo] = useState(null);

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
[out:json][timeout:25];
(
  node(around:5000,${userLocation.lat},${userLocation.lng})["amenity"="restaurant"];
  node(around:5000,${userLocation.lat},${userLocation.lng})["amenity"="cafe"];
  node(around:5000,${userLocation.lat},${userLocation.lng})["amenity"="fast_food"];
);
out;
`;

        const res = await fetch("https://overpass.kumi.systems/api/interpreter", {
            method: "POST",
            body: query
        });

        if (!res.ok) {
            console.error("API error");
            return;
        }

        const text = await res.text();

        if (text.startsWith("<?xml")) {
            console.error("Overpass returned XML error");
            return;
        }

        const data = JSON.parse(text);

        if (!data.elements.length) {
            alert("No places found nearby 😅");
        }

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
[out:json][timeout:25];
(
  node(around:8000,${userLocation.lat},${userLocation.lng})["tourism"="attraction"];
  node(around:8000,${userLocation.lat},${userLocation.lng})["historic"];
  node(around:8000,${userLocation.lat},${userLocation.lng})["leisure"="park"];
);
out;
`;

        const res = await fetch("https://overpass.kumi.systems/api/interpreter", {
            method: "POST",
            body: query
        });

        if (!res.ok) {
            console.error("API error");
            return;
        }

        const text = await res.text();

        if (text.startsWith("<?xml")) {
            console.error("Overpass returned XML error");
            return;
        }

        const data = JSON.parse(text);

        if (!data.elements.length) {
            alert("No places found nearby 😅");
        }

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
        if (!userLocation) {
            alert("Get location first");
            return;
        }

        const map = mapRef.current;
        if (!map) {
            console.log("Map not ready");
            return;
        }

        try {
            if (routeControl) {
                map.removeControl(routeControl);
            }

            const routing = L.Routing.control({
                waypoints: [
                    L.latLng(userLocation.lat, userLocation.lng),
                    L.latLng(destination.lat, destination.lng)
                ],
                lineOptions: {
                    styles: [{ color: "#2563eb", weight: 5 }]
                },
                addWaypoints: false,
                draggableWaypoints: false,
                fitSelectedRoutes: true,
                show: false,
                createMarker: () => null
            }).addTo(map);

            // ✅ GET DISTANCE + TIME
            routing.on("routesfound", function (e) {
                const route = e.routes[0];

                const distance = (route.summary.totalDistance / 1000).toFixed(2); // km
                const time = Math.round(route.summary.totalTime / 60); // minutes

                setRouteInfo({
                    distance,
                    time
                });
            });

            setRouteControl(routing);

        } catch (err) {
            console.error(err);
        }
    };

    const handleSearchRoute = async () => {
        if (!userLocation) {
            alert("Get location first");
            return;
        }

        if (!destination.trim()) {
            alert("Enter destination");
            return;
        }

        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${destination}`
            );

            const data = await res.json();

            if (data.length === 0) {
                alert("Location not found ❌");
                return;
            }

            const dest = {
                lat: parseFloat(data[0].lat),
                lng: parseFloat(data[0].lon)
            };

            setDestCoords(dest);

            showRoute(dest); // 🔥 call your route function

        } catch (err) {
            console.log(err);
            alert("Error finding location");
        }
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

            <h2>Maps & Navigation</h2>

            {/* Buttons */}
            <div className="btn-container">
                <button onClick={getLocation}>Show My Location</button>
                <button onClick={getRestaurants}>Restaurants</button>
                <button onClick={getTouristPlaces}>Tourist Places</button>
                <div className="route-box">
                <input
                    type="text"
                    placeholder="Enter destination (e.g. Taj Mahal)"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
                <button onClick={handleSearchRoute}>Navigate</button>
            </div>
            </div>
            
            {routeInfo && (
                    <div className="route-info">
                        <p>Distance: {routeInfo.distance} km | ETA: {routeInfo.time} mins</p>
                    </div>
                )}
            {/* Map */}
            <MapContainer
                center={center}
                zoom={4}
                className="map-container"
                ref={mapRef}
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