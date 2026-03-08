import React from "react";
import { useParams } from "react-router-dom";
import activities from "../../data/activities";
import "./ActivityDetails.css";

function ActivityDetails(){

const { id } = useParams();

const activity = activities.find(
(item)=> item.id === parseInt(id)
);

if(!activity){
return <h2>Activity Not Found</h2>;
}

return(

<div className="activity-details-container">

<h1>{activity.name}</h1>

<img 
src={activity.image} 
alt={activity.name}
className="details-image"
/>

<p className="activity-info"><b>Place:</b> {activity.place}</p>

<p className="activity-info"><b>Price:</b> {activity.price}</p>

<p className="activity-info"><b>Description:</b> {activity.description}</p>



<div className="date-section">

<label>Select Date:</label>

<input type="date"/>

</div>

<h3>Things Required</h3>

<ul>

{activity.thingsNeeded.map((item,index)=>(
<li key={index}>{item}</li>
))}

</ul>

<p className="duration"><b>Duration:</b> {activity.duration}</p>

<button className="confirm-btn">
Confirm Booking
</button>

</div>

);

}

export default ActivityDetails;