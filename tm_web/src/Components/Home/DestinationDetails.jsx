import React from "react";
import { useParams } from "react-router-dom";
import "./DestinationDetails.css";

import destinations from "../../data/destinations";

function DestinationDetails() {

const { id } = useParams();

const destination = destinations.find(
(place) => place.id === parseInt(id)
);

if (!destination) {
return <h2>Destination not found</h2>;
}

return (
<div className="details-page">

{/* Hero Section */}
<div className="hero-section">
<img src={destination.image} alt={destination.name}/>
<div className="hero-text">
<h1>{destination.name}</h1>
<p>{destination.description}</p>
</div>
</div>


{/* History */}
<section className="info-section">
<h2>History</h2>
<p>{destination.history}</p>
</section>


{/* Famous For */}
<section className="info-section">
<h2>Famous For</h2>
<ul>
{destination.famousFor.map((item,index)=>(
<li key={index}>{item}</li>
))}
</ul>
</section>


{/* Famous Food */}
<section className="info-section">
<h2>Famous Food</h2>
<ul>
{destination.food.map((item,index)=>(
<li key={index}>{item}</li>
))}
</ul>
</section>


{/* Shopping */}
<section className="info-section">
<h2>Shopping Places</h2>
<ul>
{destination.shopping.map((item,index)=>(
<li key={index}>{item}</li>
))}
</ul>
</section>


{/* Places to Visit */}
<section className="visit-section">
<h2>Places To Visit</h2>

<div className="visit-grid">

{destination.places.map((place,index)=>(

<div className="visit-card" key={index}>

<img src={place.image} alt={place.name}/>

<h3>{place.name}</h3>

<p><b>Timing:</b> {place.timing}</p>

<p><b>Price:</b> {place.price}</p>

<p>{place.info}</p>

</div>

))}

</div>
</section>



{/* Restaurants */}
<section className="restaurant-section">

<h2>Restaurants Nearby</h2>

<div className="restaurant-grid">

{destination.restaurants.map((res,index)=>(

<div className="restaurant-card" key={index}>

<h3>{res.name}</h3>

<p>{res.type}</p>

<p>⭐ {res.rating}</p>

</div>

))}

</div>

</section>



{/* Hotels */}
<section className="hotel-section">

<h2>Hotels</h2>

<div className="hotel-grid">

{destination.hotels.map((hotel,index)=>(

<div className="hotel-card" key={index}>

<h3>{hotel.name}</h3>

<p>{hotel.price}</p>

<button>Book Now</button>

</div>

))}

</div>

</section>

</div>
);

}

export default DestinationDetails;