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
    days: 3,
    budget: "₹12,000",
  },
  {
    id: 8,
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
    id: 9,
    name: "Rishikesh",
    type: "adventure",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
    bestTime: "September - April",
    days: 3,
    budget: "₹9000",
  },
  {
  id: 2,
  name: "Darjeeling",
  type: "mountain",
  image: "https://images.unsplash.com/photo-1597074866923-dc0589150358",
  bestTime: "March - June",
  days: 3,
  budget: "₹9000",
},

{
  id: 10,
  name: "Shimla",
  type: "mountain",
  image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c",
  bestTime: "October - June",
  days: 3,
  budget: "₹8500",
},

{
  id: 7,
  name: "Leh Ladakh",
  type: "adventure",
  image: "https://images.unsplash.com/photo-1593186343127-7a1c3c1d40c2",
  bestTime: "May - September",
  days: 5,
  budget: "₹20000",
},

{
  id: 4,
  name: "Mount Abu",
  type: "mountain",
  image: "https://images.unsplash.com/photo-1627037485369-51b41c4fca0c",
  bestTime: "October - March",
  days: 2,
  budget: "₹7000",
},

{
  id: 5,
  name: "Coorg",
  type: "nature",
  image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
  bestTime: "October - March",
  days: 3,
  budget: "₹9500",
},

{
  id: 6,
  name: "Kodaikanal",
  type: "mountain",
  image: "https://images.unsplash.com/photo-1627225924765-552d49cf47a3",
  bestTime: "September - May",
  days: 3,
  budget: "₹9000",
},

{
  id: 11,
  name: "Kerala Backwaters",
  type: "nature",
  image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
  bestTime: "September - March",
  days: 4,
  budget: "₹14000",
},

{
  id: 12,
  name: "Jaipur",
  type: "heritage",
  image: "https://images.unsplash.com/photo-1599661046827-dacde6976545",
  bestTime: "October - March",
  days: 2,
  budget: "₹8000",
},

{
  id: 13,
  name: "Varanasi",
  type: "spiritual",
  image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc",
  bestTime: "October - March",
  days: 2,
  budget: "₹6000",
},

{
  id: 14,
  name: "Andaman Islands",
  type: "beach",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  bestTime: "November - May",
  days: 5,
  budget: "₹22000",
},

{
  id: 15,
  name: "Ooty",
  type: "mountain",
  image: "https://images.unsplash.com/photo-1621693247917-7672a5c7b1e1",
  bestTime: "October - June",
  days: 3,
  budget: "₹9000",
},

{
  id: 16,
  name: "Ranthambore",
  type: "wildlife",
  image: "https://images.unsplash.com/photo-1557053964-937650b63311",
  bestTime: "October - June",
  days: 2,
  budget: "₹11000",
},

{
  id: 17,
  name: "Auli",
  type: "adventure",
  image: "https://images.unsplash.com/photo-1613553421149-3dce980c9a4c",
  bestTime: "December - March",
  days: 3,
  budget: "₹12000",
},

{
  id: 18,
  name: "Mahabalipuram",
  type: "heritage",
  image: "https://images.unsplash.com/photo-1588413335653-94b37c9b84a7",
  bestTime: "November - February",
  days: 2,
  budget: "₹7500",
},

{
  id: 19,
  name: "Hampi",
  type: "heritage",
  image: "https://images.unsplash.com/photo-1587135991058-8816c0c4f7f0",
  bestTime: "October - February",
  days: 3,
  budget: "₹8000",
},

{
  id: 20,
  name: "Gokarna",
  type: "beach",
  image: "https://images.unsplash.com/photo-1590523741831-ab7e8b833b92",
  bestTime: "October - March",
  days: 3,
  budget: "₹9000",
}
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