import React, { useState } from "react";
import "./PrePlan.css";
import { Link } from "react-router-dom";    
const destinations = [
  {
    id: 1,
    name: "Manali",
    type: "mountain",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    bestTime: "October - February",
    days: 4,
    budget: "₹12,000",
  },
  {
    id: 2,
    name: "Goa",
    type: "beach",
    image:
      "https://images.unsplash.com/photo-1587922546307-776227941871",
    bestTime: "November - March",
    days: 3,
    budget: "₹10,000",
  },
  {
    id: 3,
    name: "Udaipur",
    type: "heritage",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacde6976545",
    bestTime: "September - March",
    days: 2,
    budget: "₹8000",
  },
  {
    id: 4,
    name: "Rishikesh",
    type: "adventure",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
    bestTime: "September - April",
    days: 3,
    budget: "₹9000",
  },
];

function PrePlan() {
  const [interest, setInterest] = useState("");
  const [days, setDays] = useState("");
  const [results, setResults] = useState([]);

  const searchDestinations = () => {
    const filtered = destinations.filter(
      (d) =>
        (interest === "" || d.type === interest) &&
        (days === "" || d.days <= days)
    );

    setResults(filtered);
  };

  return (
    <div className="preplan-container">

      <h1>Plan Your Trip</h1>

      <div className="search-box">

        <input type="date" />

        <select onChange={(e) => setDays(e.target.value)}>
          <option value="">Select Days</option>
          <option value="2">1-2 Days</option>
          <option value="3">3-4 Days</option>
          <option value="5">5+ Days</option>
        </select>

        <select onChange={(e) => setInterest(e.target.value)}>
          <option value="">Select Interest</option>
          <option value="mountain">Mountains</option>
          <option value="beach">Beaches</option>
          <option value="heritage">Heritage</option>
          <option value="adventure">Adventure</option>
          <option value="trekking">Trekking</option>
          <option value="nature">Nature</option>
          <option value="resort">Resort</option>
          <option value="wildlife">Wildlife</option>
          <option value="spiritual">Spiritual</option>
        </select>

        <button onClick={searchDestinations}>
          Find Destinations
        </button>

      </div>

      <div className="result-grid">

        {results.map((place) => (
          <div className="card" key={place.id}>

            <img src={place.image} alt={place.name} />

            <h3>{place.name}</h3>

            <p><b>Best Time:</b> {place.bestTime}</p>
            <p><b>Days:</b> {place.days}</p>
            <p><b>Budget:</b> {place.budget}</p>

            <Link to={`/destination/${place.id}`}>
            <button className="details-btn">See More</button>
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

export default PrePlan;