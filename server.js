// server.js
const express = require("express");
const axios = require("axios");
const path = require('path');
const { Console } = require("console");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "./index.html");
});

// Use route parameters
app.get("/plays/:playId/:fileName", async (req, res) => {
  const { playId, fileName } = req.params; // get req. params in url

  // Construct the file path based on route parameters to send
  // file to the browser
  const filePath = (__dirname+"/plays/"+ playId+"/" +`${fileName}`);
  console.log(playId)
  console.log(filePath) 

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error serving file:", err);
      res.status(404).send("Page not found");
    }
  });
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
