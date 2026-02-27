import React, { useState } from "react";
import "./TravelPackages.css";

const packagesData = [
  {
    name: "Goa Beach Tour",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Enjoy beaches, nightlife and water sports in Goa.",
    bestTime: "October - March",
    days: "4 Days",
    price: "₹12,999",
    reviews: "4.5 ⭐ (120 reviews)",
    link: "https://www.makemytrip.com/"
  },
  {
    name: "Shimla - Manali Tour",
    location: "Shimla Manali",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description: "Explore snow mountains and scenic beauty.",
    bestTime: "December - February",
    days: "5 Days",
    price: "₹15,999",
    reviews: "4.7 ⭐ (210 reviews)",
    link: "https://www.yatra.com/"
  },
  {
    name: "Kerala Backwaters",
    location: "Kerala",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Relax in houseboats and explore nature.",
    bestTime: "September - March",
    days: "4 Days",
    price: "₹14,499",
    reviews: "4.6 ⭐ (98 reviews)",
    link: "https://www.thomascook.in/"
  }
];

const TravelPackages = () => {
  const [search, setSearch] = useState("");

  const filteredPackages = packagesData.filter((pkg) =>
    pkg.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="travel-page">

      <h2>Travel Packages</h2>

      <input
        type="text"
        placeholder="Search Goa, Shimla, Manali..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="packages-container">
        {(search ? filteredPackages : packagesData).map((pkg, index) => (
          <div className="package-card" key={index}>
            <img src={pkg.image} alt={pkg.name} />
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>
            <p><strong>Best Time:</strong> {pkg.bestTime}</p>
            <p><strong>Duration:</strong> {pkg.days}</p>
            <p><strong>Price:</strong> {pkg.price}</p>
            <p>{pkg.reviews}</p>

            <button
              onClick={() => window.open(pkg.link, "_blank")}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelPackages;