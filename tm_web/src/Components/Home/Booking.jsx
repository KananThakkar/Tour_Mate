import React, { useState } from "react";
import activities from "../../data/activities";
import "./Booking.css";
import { Link } from "react-router-dom";

function Booking() {

const [search, setSearch] = useState("");
const [results, setResults] = useState([]);

const handleSearch = () => {

const filtered = activities.filter((activity) =>
activity.name.toLowerCase().includes(search.toLowerCase()) ||
activity.place.toLowerCase().includes(search.toLowerCase())
);

setResults(filtered);

};

const displayActivities = results.length > 0 ? results : activities;

return (

<div className="booking-container">

<h1>Book Activities</h1>

{/* Search Section */}

<div className="search-box">

<input
type="text"
placeholder="Search activity or place"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<button onClick={handleSearch}>
Search
</button>

</div>


{/* Activity Cards */}

<div className="activity-grid">

{displayActivities.map((activity)=>(
<div className="activity-card" key={activity.id}>

<img src={activity.image} alt={activity.name}/>

<h3>{activity.name}</h3>

<p><b>Place:</b> {activity.place}</p>

<p><b>Price:</b> {activity.price}</p>

<Link to={`/activity/${activity.id}`}>
<button className="book-btn">
Book Now
</button>
</Link>

</div>
))}

</div>

</div>

);

}

export default Booking;