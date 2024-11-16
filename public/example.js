let map3DElement = null;
async function init() {
  console.log("I am in init one");
  const { Map3DElement,Marker3DElement  } = await google.maps.importLibrary("maps3d");
  map3DElement = new Map3DElement({
    center: {
      lat: 48.858525384646676,
      lng: 2.29448130096829,
      altitude: 600,
    }, tilt: 50, range:1000,
  });
  document.body.append(map3DElement);

  // Make fly camera around the location
  /*const camera = {
    center: {  lat: 48.858525384646676,
      lng: 2.29448130096829, altitude: 0 },
    tilt: 55,
    range: 1500
  };
  map3DElement.flyCameraAround({
    camera,
    durationMillis: 18000,
    rounds: 1
  });*/

  map3DElement.flyCameraTo({
    endCamera: {
      center: { lat: 37.6191, lng: -122.3816, altitude:1000 },
      tilt: 67.5,
      range: 1000
    },
    durationMillis: 50000
  });

  const marker = new Marker3DElement({
    position: { lat: 48.8584, lng: 2.2945, altitude: 1000 },
    title: "Click Me!",
  });

  map3DElement.append(marker);
  /*map3DElement.addEventListener("click", (event) => {
    console.log("I got clicked");
    alert("I got clicked.")
  });*/
  initAutocomplete();  
}
async function initAutocomplete() {
  const { Autocomplete } = await google.maps.importLibrary("places");
  const autocomplete = new Autocomplete(document.getElementById("pac-input"), {
    fields: ["geometry", "name", "place_id"],
  });
  autocomplete.addListener("place_changed", () => {
    //viewer.entities.removeAll();
    const place = autocomplete.getPlace();
    if (!place.geometry || !place.geometry.viewport) {
      window.alert("No viewport for input: " + place.name);
      return;
    }
    zoomToViewport(place.geometry);
  });
}
const zoomToViewport = async (geometry) => {
  const { AltitudeMode, Polyline3DElement,Polygon3DElement } = await google.maps.importLibrary(
    "maps3d"
  );
  let viewport = geometry.viewport;
  let locationPoints = [
    {
      lat: viewport.getNorthEast().lat(),
      lng: viewport.getNorthEast().lng(),
    },
    {
      lat: viewport.getSouthWest().lat(),
      lng: viewport.getNorthEast().lng(),
    },
    {
      lat: viewport.getSouthWest().lat(),
      lng: viewport.getSouthWest().lng(),
    },
    {
      lat: viewport.getNorthEast().lat(),
      lng: viewport.getSouthWest().lng(),
    },
    {
      lat: viewport.getNorthEast().lat(),
      lng: viewport.getNorthEast().lng(),
    },
  ];
  let locationPolyline = new Polyline3DElement({
    altitudeMode: AltitudeMode.CLAMP_TO_GROUND,
    strokeColor: "pink",
    strokeWidth: 10,
    coordinates: locationPoints,
  });
  map3DElement.append(locationPolyline);
  console.log(locationPolyline);

   // Define polygon coordinates (around the Eiffel Tower)
   const polygonCoords = [
    {
      lat: viewport.getNorthEast().lat()
      ,
      lng: viewport.getNorthEast().lng(),
      altitude: 1000, 
    },
    {
      lat: viewport.getSouthWest().lat(),
      lng: viewport.getNorthEast().lng(),
      altitude: 1000, 
    },
    {
      lat: viewport.getSouthWest().lat(),
      lng: viewport.getSouthWest().lng(),
      altitude: 1000, 
    },
    {
      lat: viewport.getNorthEast().lat(),
      lng: viewport.getSouthWest().lng(),
      altitude: 1000, 
    },
    {
      lat: viewport.getNorthEast().lat(),
      lng: viewport.getNorthEast().lng(),
      altitude: 1000, 
    },
  ];
   // Create the polygon
   const polygonOptions = {
    strokeColor: "yellow", // Polygon edge color
    strokeWidth: 8,
    altitudeMode: AltitudeMode.ABSOLUTE,
    extruded: true,
    drawsOccludedSegments: true,
  };

  const polygon = new google.maps.maps3d.Polygon3DElement(polygonOptions)
  polygon.outerCoordinates = polygonCoords;
  map3DElement.append(polygon);
  console.log(polygon);
  

  let elevation = await getElevationforPoint(geometry.location);
  if (map3DElement) {
    map3DElement.center = {
      lat: geometry.location.lat(),
      lng: geometry.location.lng(),
      altitude: elevation + 50,
    };
    map3DElement.heading = 0;
    map3DElement.range = 1000;
    map3DElement.tilt = 65;
  }
};
async function getElevationforPoint(location) {
  const { ElevationService } = await google.maps.importLibrary("elevation");
  // Get place elevation using the ElevationService.
  const elevatorService = new google.maps.ElevationService();
  const elevationResponse = await elevatorService.getElevationForLocations({
    locations: [location],
  });
  if (!(elevationResponse.results && elevationResponse.results.length)) {
    window.alert(`Insufficient elevation data for place: ${place.name}`);
    return;
  }
  const elevation = elevationResponse.results[0].elevation || 10;
  return elevation;
}
init();
