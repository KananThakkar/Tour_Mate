import React from "react";
import { useParams } from "react-router-dom";
import { monuments } from "../Assets/audios/data";
import "./TourPage.css";

const TourPage = () => {
  const { monumentId } = useParams();
  const monument = monuments[monumentId];

  if (!monument) {
    return <h2>Monument not found</h2>;
  }

  return (
    <div className="tour-container">

      <h1 className="tour-title">{monument.name}</h1>

      <div className="image-gallery">
        {monument.images.map((img, index) => (
          <img key={index} src={img} alt={monument.name} />
        ))}
      </div>

      <div className="description">
        <p>{monument.description}</p>
      </div>

      <div className="audio-section">
        <h3>Audio Guide</h3>
        <audio controls>
          <source src={monument.audio} type="audio/mpeg" />
        </audio>
      </div>

    </div>
  );
};

export default TourPage;