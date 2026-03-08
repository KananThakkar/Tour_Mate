import React, { useState } from "react";
import "./PrePlan.css";
import { Link } from "react-router-dom";    
import lehImg from "../Assets/images/leh.png";
import mountImg from "../Assets/images/mount.png";
import kodaiImg from "../Assets/images/Kodaikanal.png";
import ootyImg from "../Assets/images/ooty.png";
import varanasiImg from "../Assets/images/varanasi.png";
import ranthImg from "../Assets/images/ranth.png";
const destinations = [
  {
    id: 1,
    name: "Manali",
    type: "mountain",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    bestTime: "October - February",
    days: 6,
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
    image:  "https://images.unsplash.com/photo-1599661046289-e31897846e41",
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
  days: 4,
  budget: "₹9000",
},

{
  id: 10,
  name: "Shimla",
  type: "mountain",
  image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c",
  bestTime: "October - June",
  days: 6,
  budget: "₹8500",
},

{
  id: 7,
  name: "Leh Ladakh",
  type: "adventure",
  image: lehImg ,
  bestTime: "May - September",
  days: 5,
  budget: "₹20000",
},

{
  id: 4,
  name: "Mount Abu",
  type: "mountain",
  image: mountImg,
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
  image: kodaiImg,
  bestTime: "September - May",
  days: 5,
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
  image: varanasiImg,
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
  image: ootyImg,
  bestTime: "October - June",
  days: 5,
  budget: "₹9000",
},

{
  id: 16,
  name: "Ranthambore",
  type: "wildlife",
  image: ranthImg,
  bestTime: "October - June",
  days: 3,
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
          {/* <option value="nature">Nature</option> */}
          {/* <option value="resort">Resort</option> */}
          <option value="wildlife">Wildlife</option>
          <option value="spiritual">Spiritual</option>
        </select>

        <button onClick={searchDestinations}>
          Find Destinations
        </button>

      </div>
      {results.length > 0 && (

<div className="results-section">

<h2>{results.length} Destinations Found</h2>

<div className="results-grid">

{results.map((place)=>(
<div className="destination-card" key={place.id}>

<img src={place.image} alt={place.name} />

<h3>{place.name}</h3>

<p>{place.description}</p>

<p><b>Days:</b> {place.days}</p>

<p><b>Best Time:</b> {place.bestTime}</p>

<Link to={`/destination/${place.id}`}>
<button className="see-more-btn">
See More
</button>
</Link>

</div>
))}

</div>

</div>

)}

{/* Popular Destinations */}

{results.length === 0 && (

<div className="popular-section">

<h2>Popular Destinations</h2>

<div className="popular-grid">

<div className="popular-card">
<img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7" alt="Manali"/>
<h3>Manali</h3>
</div>

<div className="popular-card">  
<img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Goa"/>
<h3>Goa</h3>
</div>

<div className="popular-card">
<img src="https://images.unsplash.com/photo-1599661046289-e31897846e41" alt="Udaipur"/>
<h3>Udaipur</h3>
</div>

<div className="popular-card">
<img src={lehImg} alt="Leh Ladakh"/>
<h3>Leh Ladakh</h3>
</div>

</div>

</div>

)}

</div>
);

}

export default PrePlan;