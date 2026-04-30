import React, { useState } from "react";
import "./TravelPackages.css";
import hampiImg from "../Assets/images/hampi.png";
import ootyImg from "../Assets/images/ooty.png";
import mountImg from "../Assets/images/mount.png";
import kodaiImg from "../Assets/images/Kodaikanal.png";
import jaipurImg from "../Assets/images/jaipur.png";
import rishi from "../Assets/images/rishi.png";
import mahaImg from "../Assets/images/maha.png";
import goldenImg from "../Assets/images/golden.png";
import kashImg from "../Assets/images/kash.png";
import coorgImg from "../Assets/images/coorg.png";
import shimlaImg from "../Assets/images/shimla.png";

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
      shimlaImg,
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
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
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
    image: jaipurImg,
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
    image: rishi,
    description: "Yoga, meditation and river rafting experience.",
    bestTime: "September - April",
    days: "3 Days",
    price: "₹8,999",
    reviews: "4.4 (67 reviews)",
    link: "https://www.yatra.com/"
  },
  {
    id: 9,
    name: "Darjeeling Tea Valley",
    location: "west bengal",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358",
    description: "Enjoy scenic tea gardens and mountain views.",
    bestTime: "March - June",
    days: "4 Days",
    price: "₹10,499",
    reviews: "4.5 (76 reviews)",
    link: "https://www.makemytrip.com/"
  },
  {
    id: 10,
    name: "Udaipur Lake City",
    location: "rajasthan",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    description: "Romantic lakes and majestic palaces.",
    bestTime: "October - March",
    days: "3 Days",
    price: "₹11,999",
    reviews: "4.7 (92 reviews)",
    link: "https://www.yatra.com/"
  },
  {
    id: 11,
    name: "Andaman Island Tour",
    location: "andaman",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Crystal clear water and scuba diving adventure.",
    bestTime: "October - May",
    days: "5 Days",
    price: "₹24,999",
    reviews: "4.8 (110 reviews)",
    link: "https://www.thomascook.in/"
  },
  {
     id: 12,
     name: "Kashmir Valley",
     location: "jammu & kashmir",
     image: kashImg,
     description: "Paradise on earth with snow peaks and gardens.",
     bestTime: "March - October",
     days: "5 Days",
     price: "₹19,499",
     reviews: "4.9 (140 reviews)",
     link: "https://www.makemytrip.com/"
  },
  {
    id: 13,
    name: "Hampi Heritage Tour",
    location: "karnataka",
    image: hampiImg,
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
    image: ootyImg,
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
  {
     id: 16,
     name: "Coorg Nature Escape",
     location: "karnataka",
     image: coorgImg,
     description: "Coffee plantations and waterfalls.",
     bestTime: "October - May",
     days: "3 Days",
     price: "₹11,499",
     reviews: "4.4 (73 reviews)",
     link: "https://www.yatra.com/"
  },
  {
    id: 17,
    name: "Amritsar Golden Temple",
    location: "punjab",
    image: goldenImg,
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
    image: mahaImg,
    description: "Ancient shore temples and carvings.",
    bestTime: "November - February",
    days: "2 Days",
    price: "₹8,499",
    reviews: "4.4 (58 reviews)",
    link: "https://www.thomascook.in/"
  },
  {
    id: 19,
    name: "Mount Abu Retreat",
    location: "rajasthan",
    image: mountImg,
    description: "Rajasthan’s only hill station getaway.",
    bestTime: "October - March",
    days: "3 Days",
    price: "₹8,999",
    reviews: "4.2 (50 reviews)",
    link: "https://www.thomascook.in/"
  },
  {
    id: 20,
    name: "Kodaikanal Lake Tour",
    location: "tamil nadu",
    image: kodaiImg,
    description: "Misty hills and serene lake views.",
    bestTime: "October - June", 
    days: "3 Days",
    price: "₹9,999",
    reviews: "4.3 (64 reviews)",
    link: "https://www.yatra.com/"
  },
  {
  id: 21,
  name: "Spiti Valley Expedition",
  location: "himachal pradesh",
  image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
  description: "Explore cold deserts, monasteries and breathtaking Himalayan views.",
  bestTime: "May - October",
  days: "6 Days",
  price: "₹22,999",
  reviews: "4.8 (125 reviews)",
  link: "https://www.thomascook.in/"
}
  
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