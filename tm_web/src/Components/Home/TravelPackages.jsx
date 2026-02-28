import React, { useState } from "react";
import "./TravelPackages.css";

const packagesData = [
  {
    id: 1,
    name: "Goa Beach Tour",
    location: "goa",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description:
      "Enjoy beaches, nightlife and thrilling water sports in Goa.",
    bestTime: "October - March",
    days: "4 Days",
    price: "₹12,999",
    reviews: "4.5 (120 reviews)",
    link: "https://www.makemytrip.com/"
  },
  {
    id: 2,
    name: "Shimla - Manali Tour",
    location: "shimla manali",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description:
      "Experience snow mountains, valleys and scenic beauty.",
    bestTime: "December - February",
    days: "5 Days",
    price: "₹15,999",
    reviews: "4.7 (210 reviews)",
    link: "https://www.yatra.com/"
  },
  {
    id: 3,
    name: "Kerala Backwaters",
    location: "kerala",
    image:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
    description:
      "Relax in houseboats and explore nature’s beauty.",
    bestTime: "September - March",
    days: "4 Days",
    price: "₹14,499",
    reviews: "4.6 (98 reviews)",
    link: "https://www.thomascook.in/"
  },
    {
    id: 4,
    name: "Manali Hills",
    location: "himachal pradesh",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    description: "Experience snow mountains and adventure sports.",
    bestTime: "October - June",
    days: "5 Days",
    price: "₹12,999",
    reviews: "4.7 (120 reviews)",
    link: "https://www.yatra.com/"
  },
  {
    id: 5,
    name: "Jaipur Royal Heritage",
    location: "rajasthan",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    description: "Explore forts, palaces and royal culture.",
    bestTime: "October - March",
    days: "3 Days",
    price: "₹9,499",
    reviews: "4.5 (85 reviews)",
    link: "https://www.thomascook.in/"
  },
  {
    id: 6,
    name: "Goa Beach Escape",
    location: "goa",
    image: "https://images.unsplash.com/photo-1587922546307-776227941871",
    description: "Enjoy beaches, nightlife and water sports.",
    bestTime: "November - February",
    days: "4 Days",
    price: "₹13,999",
    reviews: "4.6 (150 reviews)",
    link: "https://www.makemytrip.com/"
  },
  {
    id: 7,
    name: "Leh Ladakh Adventure",
    location: "ladakh",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
    description: "Explore high-altitude deserts and stunning lakes.",
    bestTime: "May - September",
    days: "6 Days",
    price: "₹21,499",
    reviews: "4.8 (132 reviews)",
    link: "https://www.thomascook.in/"
  },
  {
    id: 8,
    name: "Rishikesh Retreat",
    location: "uttarakhand",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
    description: "Yoga, meditation and river rafting experience.",
    bestTime: "September - April",
    days: "3 Days",
    price: "₹8,999",
    reviews: "4.4 (67 reviews)",
    link: "https://www.yatra.com/"
  },
  // {
  //   id: 9,
  //   name: "Darjeeling Tea Valley",
  //   location: "west bengal",
  //   image: "https://images.unsplash.com/photo-1588413335653-94b37c9b84a7?auto=format&fit=crop&w=800&q=60",
  //   description: "Enjoy scenic tea gardens and mountain views.",
  //   bestTime: "March - June",
  //   days: "4 Days",
  //   price: "₹10,499",
  //   reviews: "4.5 (76 reviews)",
  //   link: "https://www.makemytrip.com/"
  // },
  // {
  //   id: 10,
  //   name: "Udaipur Lake City",
  //   location: "rajasthan",
  //   image: "https://images.unsplash.com/photo-1597211684561-02c9d8bca9e5?auto=format&fit=crop&w=800&q=60",
  //   description: "Romantic lakes and majestic palaces.",
  //   bestTime: "October - March",
  //   days: "3 Days",
  //   price: "₹11,999",
  //   reviews: "4.7 (92 reviews)",
  //   link: "https://www.yatra.com/"
  // },
  {
    id: 11,
    name: "Andaman Island Tour",
    location: "andaman",
    image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9",
    description: "Crystal clear water and scuba diving adventure.",
    bestTime: "October - May",
    days: "5 Days",
    price: "₹24,999",
    reviews: "4.8 (110 reviews)",
    link: "https://www.thomascook.in/"
  },
  // {
  //   id: 12,
  //   name: "Kashmir Valley",
  //   location: "jammu & kashmir",
  //   image: "https://images.unsplash.com/photo-1593691509543-c55fb32a3fbc",
  //   description: "Paradise on earth with snow peaks and gardens.",
  //   bestTime: "March - October",
  //   days: "5 Days",
  //   price: "₹19,499",
  //   reviews: "4.9 (140 reviews)",
  //   link: "https://www.makemytrip.com/"
  // },
  {
    id: 13,
    name: "Hampi Heritage Tour",
    location: "karnataka",
    image: "https://images.unsplash.com/photo-1614107151491-6876eecbff89",
    description: "Explore ancient temples and UNESCO ruins.",
    bestTime: "October - February",
    days: "3 Days",
    price: "₹9,999",
    reviews: "4.6 (70 reviews)",
    link: "https://www.thomascook.in/"
  },
  {
    id: 14,
    name: "Ooty Hill Station",
    location: "tamil nadu",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369",
    description: "Cool climate, lakes and botanical gardens.",
    bestTime: "October - June",
    days: "4 Days",
    price: "₹10,999",
    reviews: "4.3 (60 reviews)",
    link: "https://www.yatra.com/"
  },
  {
    id: 15,
    name: "Varanasi Spiritual Tour",
    location: "uttar pradesh",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca",
    description: "Witness Ganga Aarti and spiritual vibes.",
    bestTime: "October - March",
    days: "2 Days",
    price: "₹7,499",
    reviews: "4.5 (88 reviews)",
    link: "https://www.thomascook.in/"
  },
  // {
  //   id: 16,
  //   name: "Coorg Nature Escape",
  //   location: "karnataka",
  //   image: "https://images.unsplash.com/photo-1603088549155-6ae6fdb2c7d2",
  //   description: "Coffee plantations and waterfalls.",
  //   bestTime: "October - May",
  //   days: "3 Days",
  //   price: "₹11,499",
  //   reviews: "4.4 (73 reviews)",
  //   link: "https://www.yatra.com/"
  // },
  {
    id: 17,
    name: "Amritsar Golden Temple",
    location: "punjab",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
    description: "Visit Golden Temple and Wagah Border.",
    bestTime: "October - March",
    days: "2 Days",
    price: "₹6,999",
    reviews: "4.7 (95 reviews)",
    link: "https://www.makemytrip.com/"
  },
  {
    id: 18,
    name: "Mahabalipuram Temples",
    location: "tamil nadu",
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33",
    description: "Ancient shore temples and carvings.",
    bestTime: "November - February",
    days: "2 Days",
    price: "₹8,499",
    reviews: "4.4 (58 reviews)",
    link: "https://www.thomascook.in/"
  },
  // {
  //   id: 19,
  //   name: "Mount Abu Retreat",
  //   location: "rajasthan",
  //   image: "https://images.unsplash.com/photo-1629113767025-3c1d8e6e0f54?auto=format&fit=crop&w=800&q=60",
  //   description: "Rajasthan’s only hill station getaway.",
  //   bestTime: "October - March",
  //   days: "3 Days",
  //   price: "₹8,999",
  //   reviews: "4.2 (50 reviews)",
  //   link: "https://www.thomascook.in/"
  // },
  // {
  //   id: 20,
  //   name: "Kodaikanal Lake Tour",
  //   location: "tamil nadu",
  //   image: "https://images.unsplash.com/photo-1580654843061-8c8eec4f4a4b",
  //   description: "Misty hills and serene lake views.",
  //   bestTime: "October - June", 
  //   days: "3 Days",
  //   price: "₹9,999",
  //   reviews: "4.3 (64 reviews)",
  //   link: "https://www.yatra.com/"
  // }
  
];

const TravelPackages = () => {
  const [search, setSearch] = useState("");

  const filteredPackages = packagesData.filter((pkg) =>
    pkg.location.includes(search.toLowerCase())
  );

  return (
    <div className="travel-page">

      <h2 className="title">Travel Packages</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search Goa, Shimla, Manali..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
      </div>

      <div className="packages-container">
        {(search ? filteredPackages : packagesData).length === 0 ? (
          <p className="no-result">No packages found 😕</p>
        ) : (
          (search ? filteredPackages : packagesData).map((pkg) => (
            <div className="package-card" key={pkg.id}>
              <img src={pkg.image} alt={pkg.name} />

              <div className="package-content">
                <h3>{pkg.name}</h3>
                <p className="desc">{pkg.description}</p>

                <div className="details">
                  <p><strong>Best Time:</strong> {pkg.bestTime}</p>
                  <p><strong>Duration:</strong> {pkg.days}</p>
                  <p><strong>Price:</strong> {pkg.price}</p>
                  <p>⭐ {pkg.reviews}</p>
                </div>

                <button
                  onClick={() => window.open(pkg.link, "_blank")}
                  className="book-btn"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TravelPackages;