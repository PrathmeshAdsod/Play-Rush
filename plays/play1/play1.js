let map3DElement = null;
async function init() {
  const { Map3DElement, Polyline3DElement, AltitudeMode, Model3DElement } =
    await google.maps.importLibrary("maps3d");
  map3DElement = new Map3DElement({
    center: {
      lat: 48.858525384646676,
      lng: 2.29448130096829,
      altitude: 400,
    },
    tilt: 50,
    range: 1000,
  });
  document.body.append(map3DElement);

  /*
  // 3D models not getting imported 
  const models = [
    // A model with regular settings.
    {
      position: {lat:48.85600000367125, lng: 2.2982139230018994, altitude:100},
      scale: 100,
      altititudeMode : "RELATIVE_TO_GROUND"
    },
   
  ];
  for (const {position,  scale} of models) {
    const model = new Model3DElement({
      src: './scene.gltf',
      position,
      scale,
    });

    map3DElement.append(model);
  }
  */

  let locationPoints = [
    {
      lat: 48.85466497254251,
      lng: 2.2954396619839796,
    },
    {
      lat: 48.85762007985151,
      lng: 2.2999310349462263,
    },
  ];
  let locationPolyline = new Polyline3DElement({
    altitudeMode: AltitudeMode.CLAMP_TO_GROUND,
    strokeColor: "pink",
    strokeWidth: 20,
    coordinates: locationPoints,
  });
  map3DElement.append(locationPolyline);
}

init();

// By default display should be none for answer input
document.getElementById("popupAnswer").style.display = "none";
// Function to close the popup
function closePopup() {
  document.getElementById("taskPopup").style.display = "none";
}

// Function to open the popup
showPopup = (title, message, display) => {
  document.getElementById("popupTitle").innerText = title;
  document.getElementById("popupMessage").innerText = message;
  document.getElementById("taskPopup").style.display = "flex";
  document.getElementById("popupAnswer").style.display = display;
};

// For onclik events later on
/*document.getElementById("someMapObject").onclick = () => {
  showPopup("Welcome to the Tower", "Batman, you’re in the heart of Paris. The Syndicate has left your first clue hidden by the base of the Eiffel Tower. Seek it out, and it will reveal your next destination", "none");
};*/
/*map.addEventListener('gmp-click', (event) => {
  console.log(event.position);
  showPopup("Welcome to the Tower", "Batman, you’re in the heart of Paris. The Syndicate has left your first clue hidden by the base of the Eiffel Tower. Seek it out, and it will reveal your next destination", "none");
});*/

function startCountdown(duration) {
  let timer = duration,
    minutes,
    seconds;

  const timerPopup = document.getElementById("timer-popup");

  const countdownInterval = setInterval(() => {
    minutes = Math.floor(timer / 60);
    seconds = timer % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerPopup.textContent = `Time Left: ${minutes}:${seconds}`;

    if (--timer < 0) {
      clearInterval(countdownInterval);
      timerPopup.textContent = "Time's up!";
      // Additional actions when time is up can be added here
    }
  }, 1000);
}

window.onload = function () {
  startCountdown(30); //seconds
};
