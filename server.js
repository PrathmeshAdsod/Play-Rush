// server.js
const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(express.static("public")); 

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "./index.html");
});

// Route to serve Google Maps API via proxy
app.get("/google-maps-api", async (req, res) => {
  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/js?key=process.env.API_KEY&v=alpha&libraries=maps3d"
    );
    res.setHeader("Content-Type", "application/javascript");
    res.send(response.data);
  } catch (error) {
    console.error("Failed to load Google Maps API:", error);
    res.status(500).send("Error loading Google Maps API");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
