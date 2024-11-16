

/********************              IMPORT REQUIRED PACKAGES        ******************/
const express = require("express");
const axios = require("axios");
const path = require('path');
require("dotenv").config();

const app = express(); 
const PORT = 3000;

/*********************              MIDDLWARE FOR STATIC FILES     ********************/

app.use(express.static("public"));
// In our plays folder everything will be staatic so usign this middleware
app.use(express.static("plays"));


/******************************        URL ROUTING       *****************************/

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "./index.html");
});

// Use route parameters
app.get("/plays/:playId/:fileName",  (req, res) => {
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

  try {
    const googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async&v=alpha&libraries=maps3d&callback=init`;

    const response = await axios.get(googleMapsUrl, {
      responseType: 'text', 
    });

    // Set the content type to JavaScript
    res.set('Content-Type', 'application/javascript');
    res.send(response.data);
   

  } catch (error) {
    console.error('Error fetching Google Maps API:', error);
    res.status(500).send('Error fetching Google Maps API');
  }
});

app.get('/google-places-api', (req, res) => {
  const apiKey = process.env.API_KEY; 
  if (!apiKey) {
      return res.status(500).send('API key is missing');
  }
  
 try {
   // Construct the script response
   const script = `
   (g => { 
       var h, a, k, p = "The Google Maps JavaScript API", c = "google", 
       l = "importLibrary", q = "__ib__", m = document, b = window; 
       b = b[c] || (b[c] = {}); 
       var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, 
       u = () => h || (h = new Promise(async (f, n) => { 
           await (a = m.createElement("script")); 
           e.set("libraries", [...r] + ""); 
           for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); 
           e.set("callback", c + ".maps." + q); 
           a.src = \`https://maps.\${c}apis.com/maps/api/js?\` + e; 
           d[q] = f; 
           a.onerror = () => h = n(Error(p + " could not load.")); 
           a.nonce = m.querySelector("script[nonce]")?.nonce || ""; 
           m.head.append(a) 
       })); 
       d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) 
   })({
       key: "${apiKey}", 
       v: "alpha",
   });
`;

res.set('Content-Type', 'application/javascript');
res.send(script);
console.log("places api loaded")
 }
 catch (error) {
  console.error('Error fetching Google Places API:', error);
  res.status(500).send('Error fetching Google Places API');
}


});


/*********************************    LISTEN ON THE PORT      **************************** */

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
