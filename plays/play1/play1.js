import { popupdataQuestions, popupdataAns } from "./popupsdata.js";

let answer = null;
let lockOneUnlocked,
  lockTwoUnlocked,
  lockThreeUnlocked = false;
const closePopup = () => {
  document.getElementById("taskPopup").style.display = "none";
};
document.querySelector(".close-btn").addEventListener("click", closePopup);

// By default display should be none for answer input
document.getElementById("popupAnswer").style.display = "none";
document.getElementById("popupSend").style.display = "none";

const showPopup = (title, message, display) => {
  document.getElementById("popupTitle").innerText = title;
  document.getElementById("popupMessage").innerText = message;
  document.getElementById("taskPopup").style.display = "flex";
  document.getElementById("popupAnswer").style.display = display;
  document.getElementById("popupSend").style.display = display;
};

let map3DElement = null;
async function init() {
  const {
    Map3DElement,
    Polyline3DElement,
    Polygon3DElement,
    AltitudeMode,
    Model3DElement,
  } = await google.maps.importLibrary("maps3d");
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

  const flyToNextPlace = (lat, lng, altitude, tilt, durationMillis) => {
    map3DElement.flyCameraTo({
      endCamera: {
        center: { lat: lat, lng: lng, altitude: altitude },
        tilt: tilt,
      },
      durationMillis: durationMillis,
    });
  };

  // 3D models not getting imported

  const model = new Model3DElement({
    src: "./atlantic_explorer_submarineglb.glb",
    position: {
      lat: 48.85600000367125,
      lng: 2.2982139230018994,
      altitude: 100,
    },
    scale: 2,
  });

  map3DElement.append(model);

  
  // Define polygon coordinates (around the Eiffel Tower)
  const polygonCoordsPlace1 = [
    {
      lat: 48.85357861955807,
      lng: 2.3012321626741468,
      altitude: 100,
    },
    {
      lat: 48.85317623104722,
      lng: 2.3018866216491203,
      altitude: 100,
    },
    {
      lat: 48.85283031553172,
      lng: 2.3014038240446317,
      altitude: 100,
    },
    {
      lat: 48.85242792100644,
      lng: 2.302122656033536,
      altitude: 100,
    },
    {
      lat: 48.853430371538394,
      lng: 2.3036139641977083,
      altitude: 100,
    },
    {
      lat: 48.853903351790365,
      lng: 2.3029165898801143,
      altitude: 100,
    },
    {
      lat: 48.85359979781395,
      lng: 2.302476707618247,
      altitude: 100,
    },
    {
      lat: 48.85392452990609,
      lng: 2.301822248643274,
      altitude: 100,
    },
  ];
  // Create the polygon
  const polygonOptionsPlace1 = {
    strokeColor: "blue", // Polygon edge color
    strokeWidth: 8,
    fillColor: "white", // Polygon fill color
    altitudeMode: AltitudeMode.ABSOLUTE,
    extruded: true,
    drawsOccludedSegments: true,
  };

  const polygonPlace1 = new Polygon3DElement(polygonOptionsPlace1);
  polygonPlace1.outerCoordinates = polygonCoordsPlace1;
  map3DElement.append(polygonPlace1);
  console.log(polygonPlace1);

  map3DElement.addEventListener("gmp-click", async (event) => {
    if (event.placeId === "ChIJl0USWgBx5kcR7c60ktBHoKQ") {
      showPopup(
        popupdataQuestions[0].title,
        popupdataQuestions[0].message,
        "block"
      );

      document
        .getElementById("popupSend")
        .addEventListener("click", async () => {
          answer = document.getElementById("popupAnswer").value;
          if (popupdataAns[0].has(answer.toLowerCase())) {
            closePopup();
            document.getElementById("popupAnswer").value = "";
            // Await the flyToNextPlace to ensure it completes before showing the next popup
            flyToNextPlace(
              38.89777647065526,
              -77.0364654316114,
              1000,
              50,
              20000
            );
          }
        });
    }

    if (event.placeId === "ChIJ37HL3ry3t4kRv3YLbdhpWXE") {
      showPopup(
        popupdataQuestions[1].title,
        popupdataQuestions[1].message,
        "block"
      );
      document
        .getElementById("popupSend")
        .addEventListener("click", async () => {
          answer = document.getElementById("popupAnswer").value;
          console.log(answer);

          if (popupdataAns[1].has(answer.toLowerCase())) {
            closePopup();
            document.getElementById("popupAnswer").value = "";

            const locationPointsWhiteHouseToLinconMemorial = [
              { lat: 38.90048691793611, lng: -77.0364520173927 },
              { lat: 38.901427744028524, lng: -77.03652419210276 },
              { lat: 38.90137157565684, lng: -77.0434890521523 },
              { lat: 38.89207509784051, lng: -77.04347100846188 },
              { lat: 38.89215936138652, lng: -77.04809019053927 },
              { lat: 38.89017914104248, lng: -77.04991260210663 },
            ];

            let locationPolylineWhiteHouseToLinconMemorial =
              new Polyline3DElement({
                altitudeMode: AltitudeMode.CLAMP_TO_GROUND,
                strokeColor: "yellow",
                strokeWidth: 20,
                coordinates: locationPointsWhiteHouseToLinconMemorial,
              });

            map3DElement.append(locationPolylineWhiteHouseToLinconMemorial);
          }
        });
    }

    ///lincoln memorial
    if (event.placeId === "ChIJh2KQ4HG3t4kRti5cycnRSRA") {
      showPopup(
        popupdataQuestions[2].title,
        popupdataQuestions[2].message,
        "block"
      );
      document
        .getElementById("popupSend")
        .addEventListener("click", async () => {
          answer = document.getElementById("popupAnswer").value;
          console.log(answer);

          if (popupdataAns[2].has(answer.toLowerCase())) {
            closePopup();
            document.getElementById("popupAnswer").value = "";

            flyToNextPlace(
              51.500725048861845,
              -0.12462037155249032,
              500,
              50,
              20000
            );
            setTimeout(() => {
              showPopup(
                popupdataQuestions[3].title,
                popupdataQuestions[3].message,
                "none"
              );
            }, 20000);
          }
        });
    }

    // Burmingham Palace ChIJtV5bzSAFdkgRpwLZFPWrJgo
    if (event.placeId === "ChIJtV5bzSAFdkgRpwLZFPWrJgo") {
      showPopup(
        popupdataQuestions[4].title,
        popupdataQuestions[4].message,
        "none"
      );

      const locationPointsPaplaceToTunnel = [
        { lat: 51.50199171250848, lng: -0.14002414883697162 },
        { lat: 51.5002282601169, lng: -0.14095339829953704 },
        { lat: 51.5011324592082, lng: -0.12771835940139967 },
        { lat: 51.500312503035, lng: -0.12742063869980105 },
        { lat: 51.50022264391924, lng: -0.12631997421847965 },
        { lat: 51.50102575340985, lng: -0.12607638455353531 },
        { lat: 51.50026475695673, lng: -0.11669793088861279 },
        { lat: 51.50155084739325, lng: -0.11704076074322922 },
        { lat: 51.50238201315516, lng: -0.11636412278505054 },
        { lat: 51.501921504267955, lng: -0.11556117907467844 },
      ];

      let locationPolylinePalaceToTunnel = new Polyline3DElement({
        altitudeMode: AltitudeMode.CLAMP_TO_GROUND,
        strokeColor: "red",
        strokeWidth: 20,
        coordinates: locationPointsPaplaceToTunnel,
      });

      map3DElement.append(locationPolylinePalaceToTunnel);
    }
    // Graffiti tunnel ChIJkSkaX7gEdkgRXGkVq9DzCcI
    if (event.placeId === "ChIJkSkaX7gEdkgRXGkVq9DzCcI") {
      showPopup(
        popupdataQuestions[5].title,
        popupdataQuestions[5].message,
        "block"
      );

      document
        .getElementById("popupSend")
        .addEventListener("click", async () => {
          answer = document.getElementById("popupAnswer").value;
          console.log(answer);

          if (popupdataAns[3].has(answer.toLowerCase())) {
            closePopup();
            document.getElementById("popupAnswer").value = "";

            flyToNextPlace(
              55.41558021778054,
              -1.7059101314995402,
              500,
              50,
              20000
            );
            setTimeout(() => {
              showPopup(
                popupdataQuestions[6].title,
                popupdataQuestions[6].message,
                "none"
              );
            }, 20000);
          }
        });
    }
    //  Alnwick Castle

    if (event.placeId === "ChIJDbwj7eAAfkgRQfaQspg6eAg") {
      if (!lockOneUnlocked && !lockTwoUnlocked && !lockThreeUnlocked) {
        showPopup(
          popupdataQuestions[7].title,
          popupdataQuestions[7].message,
          "block"
        );

        document
          .getElementById("popupSend")
          .addEventListener("click", async () => {
            answer = document.getElementById("popupAnswer").value;

            if (popupdataAns[4].has(answer.toLowerCase())) {
              closePopup();
              document.getElementById("popupAnswer").value = "";
              lockOneUnlocked = true;
              console.log("lockOneUnlocked ", lockOneUnlocked);

              if (lockOneUnlocked && !lockTwoUnlocked && !lockThreeUnlocked) {
                showPopup(
                  popupdataQuestions[8].title,
                  popupdataQuestions[8].message,
                  "block"
                );

                document
                  .getElementById("popupSend")
                  .addEventListener("click", async () => {
                    answer = document.getElementById("popupAnswer").value;
                    console.log(answer);

                    if (popupdataAns[5].has(answer.toLowerCase())) {
                      closePopup();
                      document.getElementById("popupAnswer").value = "";
                      lockTwoUnlocked = true;

                      if (
                        lockOneUnlocked &&
                        lockTwoUnlocked &&
                        !lockThreeUnlocked
                      ) {
                        showPopup(
                          popupdataQuestions[9].title,
                          popupdataQuestions[9].message,
                          "block"
                        );

                        document
                          .getElementById("popupSend")
                          .addEventListener("click", async () => {
                            answer =
                              document.getElementById("popupAnswer").value;
                            console.log(answer);

                            if (popupdataAns[6].has(answer.toLowerCase())) {
                              closePopup();
                              document.getElementById("popupAnswer").value = "";
                              lockThreeUnlocked = true;

                              if (
                                lockOneUnlocked &&
                                lockTwoUnlocked &&
                                lockThreeUnlocked
                              ) {
                                showPopup(
                                  popupdataQuestions[10].title,
                                  popupdataQuestions[10].message,
                                  "none"
                                );
                              }
                            }
                          });
                      }
                    }
                  });
              }
            }
          });
      }
    }
  });
}

init();

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
  startCountdown(3600); //seconds
};
