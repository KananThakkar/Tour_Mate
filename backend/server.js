const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const guideAIRoutes = require("./routes/guideAI");
app.use("/api/guideAI", guideAIRoutes);

const placesRoutes = require("./routes/places");
app.use("/api/places", placesRoutes);

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

