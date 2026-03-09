import React from "react";
import "./AudioTours.css";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaUserTie, FaWalking, FaClock } from "react-icons/fa";

import qutub from "../Assets/monuments/qutub_minar.png";
import redfort from "../Assets/monuments/redfort.png";
import hampi from "../Assets/monuments/hampi.png";
import ajanta from "../Assets/monuments/ajanta.png";
import ellora from "../Assets/monuments/ellora.png";
import konark from "../Assets/monuments/konark.png";
import khajuraho from "../Assets/monuments/khajuraho.png";
import sanchi from "../Assets/monuments/sanchi.png";
import fatehpur from "../Assets/monuments/fatehpur.png";

const tours = [
  {
    id: 1,
    name: "Taj Mahal",
    location: "Agra, India",
    guide: "ASI Official Guide",
    type: "Walking Tour",
    duration: "15 mins",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg"
  },
  {
    id: 2,
    name: "Qutub Minar",
    location: "Delhi, India",
    guide: "Historic India",
    type: "Walking Tour",
    duration: "12 mins",
    image: qutub
  },
  {
    id: 3,
    name: "Red Fort",
    location: "Delhi, India",
    guide: "ASI Official Guide",
    type: "Walking Tour",
    duration: "14 mins",
    image: redfort
  },
  {
    id: 4,
    name: "Hampi",
    location: "Karnataka, India",
    guide: "Historic India",
    type: "Walking Tour",
    duration: "18 mins",
    image: hampi
  },
  {
    id: 5,
    name: "Ajanta Caves",
    location: "Maharashtra, India",
    guide: "ASI Official Guide",
    type: "Walking Tour",
    duration: "16 mins",
    image: ajanta
  },
  {
    id: 6,
    name: "Ellora Caves",
    location: "Maharashtra, India",
    guide: "Historic India",
    type: "Walking Tour",
    duration: "17 mins",
    image: ellora
  },
  {
    id: 7,
    name: "Konark Sun Temple",
    location: "Odisha, India",
    guide: "ASI Official Guide",
    type: "Walking Tour",
    duration: "13 mins",
    image: konark
  },
  {
    id: 8,
    name: "Khajuraho Temples",
    location: "Madhya Pradesh, India",
    guide: "Historic India",
    type: "Walking Tour",
    duration: "15 mins",
    image: khajuraho
  },
  {
    id: 9,
    name: "Sanchi Stupa",
    location: "Madhya Pradesh, India",
    guide: "ASI Official Guide",
    type: "Walking Tour",
    duration: "11 mins",
    image: sanchi
  },
  {
    id: 10,
    name: "Fatehpur Sikri",
    location: "Uttar Pradesh, India",
    guide: "Historic India",
    type: "Walking Tour",
    duration: "14 mins",
    image: fatehpur
  }
];

function AudioTours() {

  const startTour = (name) => {
    console.log("Starting tour:", name);
  };

  return (
    <div className="tours-container">

      <h1 className="page-title">Audio Tours</h1>

      {tours.map((tour) => (
        <div className="tour-card" key={tour.id}>

          <div className="tour-left">

            <h2 className="tour-name">{tour.name}</h2>

            <div className="tour-row">
              <span><FaMapMarkerAlt /> {tour.location}</span>
              <span>|</span>
              <span><FaUserTie /> {tour.guide}</span>
              <span>|</span>
              <span><FaWalking /> {tour.type}</span>
              <span>|</span>
              <span><FaClock /> {tour.duration}</span>
            </div>
            <Link key={tour.name} to={`/tour/${tour.id}`}>
            <button
              className="tour-button"
              
            >
              Start Tour
            </button>
            </Link>

          </div>

          <div className="tour-right">
            <img
              src={tour.image}
              alt={tour.name}
              className="tour-image"
            />
          </div>

        </div>
      ))}

    </div>
  );
}

export default AudioTours;