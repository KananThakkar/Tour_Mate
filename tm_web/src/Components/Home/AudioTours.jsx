import React from "react";
import "./AudioTours.css";

const tours = [
  {
    name: "Taj Mahal Audio Tour",
    location: "Agra, India",
    duration: "15 mins",
    type: "Walking Tour",
    guide: "ASI Official Guide",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
    audio: "/audio/tajmahal.mp3"
  },
  {
    name: "Qutub Minar Tour",
    location: "Delhi, India",
    duration: "12 mins",
    type: "Walking Tour",
    guide: "Historic India",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Qutub_Minar_2011.jpg",
    audio: "/audio/qutubminar.mp3"
  },
  {
    name: "Hampi Ruins Audio Guide",
    location: "Karnataka, India",
    duration: "18 mins",
    type: "Heritage Walk",
    guide: "ASI Guide",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Hampi_virupaksha_temple.jpg",
    audio: "/audio/hampi.mp3"
  }
];

function AudioTours() {
  return (
    <div className="audio-container">

      <h1 className="audio-title">Indian Monument Audio Tours</h1>

      {tours.map((tour, index) => (
        <div key={index} className="audio-card">

          <div className="audio-details">
            <h2>{tour.name}</h2>

            <p><strong>Location:</strong> {tour.location}</p>
            <p><strong>Type:</strong> {tour.type}</p>
            <p><strong>Duration:</strong> {tour.duration}</p>
            <p><strong>Guide:</strong> {tour.guide}</p>

            <audio controls>
              <source src={tour.audio} type="audio/mp3" />
            </audio>

          </div>

          <div className="audio-image">
            <img src={tour.image} alt={tour.name} />
          </div>

        </div>
      ))}
    </div>
  );
}

export default AudioTours;