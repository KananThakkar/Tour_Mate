const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {

  const lat = 28.6139;
  const lng = 77.2090;

  const query = `
  [out:json];
  node(around:2000,${lat},${lng})["amenity"="restaurant"];
  out;
  `;

  const response = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: query
  });

  const data = await response.json();

  const places = data.elements.map(p => ({
    name: p.tags.name || "Restaurant",
    lat: p.lat,
    lng: p.lon
  }));

  res.json(places);
});

module.exports = router;