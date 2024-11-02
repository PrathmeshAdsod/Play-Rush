// server.js
const express = require("express");
const axios = require("axios");
const path = require('path');
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

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error serving file:", err);
      res.status(404).send("Page not found");
    }
  });
});

// Route to serve Google Maps API via proxy
app.get("/google-maps-api", async (req, res) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return res.status(500).send('API key is missing');
  }
  const googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&&loading=async&v=alpha&libraries=maps3d`;
  res.redirect(googleMapsUrl);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
