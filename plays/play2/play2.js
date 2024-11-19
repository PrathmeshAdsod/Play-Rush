import { popupdataQuestions, popupdataAns } from "./popupsdata.js";
// 12000
let map3DElement = null;
let answer = "";
let ans1,
  ans2,
  ans3 = false;
let cameBack = false;
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

const locationPointsBritishLibraryToMetaKingCross = [
  {lat : 51.52946476758867, lng : -0.12644016425095497},
  {lat : 51.53349980398694, lng : -0.1286767573280902},
  {lat : 51.53502362590282, lng : -0.12224631809208662}, 
  {lat : 51.53953923604279, lng : -0.12472152682760651}, 
  {lat : 51.538317129204394, lng : -0.12747742929015213}
]

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
      lat: 55.415588031377496,
      lng: -1.7059267913163716,
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

  map3DElement.addEventListener("gmp-click", async (event) => {
    // Alnwick Castle
    if (event.placeId === "ChIJDbwj7eAAfkgRQfaQspg6eAg") {
      if (!ans1 && !ans2 && !ans3) {
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
              ans1 = true;
              if (ans1 && !ans2 && !ans3) {
                showPopup(
                  popupdataQuestions[1].title,
                  popupdataQuestions[1].message,
                  "block"
                );
                document
                  .getElementById("popupSend")
                  .addEventListener("click", async () => {
                    answer = document.getElementById("popupAnswer").value;
                    if (popupdataAns[1].has(answer.toLowerCase())) {
                      closePopup();
                      document.getElementById("popupAnswer").value = "";
                      ans2 = true;

                      if (ans1 && ans2 && !ans3) {
                        showPopup(
                          popupdataQuestions[2].title,
                          popupdataQuestions[2].message,
                          "block"
                        );
                        document
                          .getElementById("popupSend")
                          .addEventListener("click", async () => {
                            answer =
                              document.getElementById("popupAnswer").value;
                            if (popupdataAns[2].has(answer.toLowerCase())) {
                              closePopup();
                              document.getElementById("popupAnswer").value = "";
                              ans3 = true;

                              if (ans1 && ans2 && ans3) {
                                flyToNextPlace(
                                  56.87635787970366,
                                  -5.431780361042584,
                                  1000,
                                  50,
                                  12000
                                );

                                showPopup(
                                  popupdataQuestions[3].title,
                                  popupdataQuestions[3].message,
                                  "none"
                                );
                                setTimeout(() => {
                                  closePopup();
                                }, 19000);
                                setTimeout(() => {
                                  showPopup(
                                    popupdataQuestions[4].title,
                                    popupdataQuestions[4].message,
                                    "none"
                                  );
                                }, 12000);
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

    if (event.placeId === "ChIJtaE4NcmzjkgR5z8-41V_s_c") {
      showPopup(
        popupdataQuestions[5].title,
        popupdataQuestions[5].message,
        "block"
      );

      document
        .getElementById("popupSend")
        .addEventListener("click", async () => {
          answer = document.getElementById("popupAnswer").value;
          if (popupdataAns[3].has(answer.toLowerCase())) {
            document.getElementById("popupAnswer").value = "";
            closePopup();
            flyToNextPlace(
              51.53204389671746,
              -0.12359780000000001,
              500,
              50,
              12000
            );

            setTimeout(() => {
              showPopup(
                popupdataQuestions[6].title,
                popupdataQuestions[6].message,
                "none"
              );
            }, 12000);
          }
        });
    }

    // British Library near king cross  51.53012638638873, -0.12765722097602147
    // Can keep many clues, hintsm riddles , questions and maonly answers here

    if (event.placeId === "ChIJC0ehpaMbdkgRjN3ODGNtZdU") {
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
            document.getElementById("popupAnswer").value = "";
            closePopup();

            showPopup(
              popupdataQuestions[8].title,
              popupdataQuestions[8].message,
              "block"
            );

            document
              .getElementById("popupSend")
              .addEventListener("click", async () => {
              
             answer = document.getElementById("popupAnswer").value;
             if (popupdataAns[5].has(answer.toLowerCase())) {
              document.getElementById("popupAnswer").value=""
                  closePopup();
                  showPopup(  
                    popupdataQuestions[9].title,
                    popupdataQuestions[9].message,
                    "none"
                  );


             }
                
            });
          }
        });
    }

    if(event.placeId === "ChIJlRMXcDsbdkgRJdsP3nlUkBg") {
      if(cameBack) {
        closePopup();
        showPopup(
          popupdataQuestions[15].title,
          popupdataQuestions[15].message,
          "block"
        )
        document
        .getElementById("popupSend")
        .addEventListener("click", async () => {
          answer = document.getElementById("popupAnswer").value;
          if (popupdataAns[9].has(answer.toLowerCase())) {
            document.getElementById("popupAnswer").value = "";
            closePopup();

            flyToNextPlace(55.94866075523764, -3.1995272653613864, 1000, 50, 12000);
          }
        });
      }
      
      else {

      
       showPopup(
        popupdataQuestions[10].title,
        popupdataQuestions[10].message,
        "block"
      );

      document
      .getElementById("popupSend")
      .addEventListener("click", async () => {
        answer = document.getElementById("popupAnswer").value;
        if (! cameBack && popupdataAns[6].has(answer.toLowerCase())) {
          document.getElementById("popupAnswer").value = "";
          closePopup();

          showPopup(
            popupdataQuestions[11].title,
            popupdataQuestions[11].message,
            "block"
          );
          document
          .getElementById("popupSend")
          .addEventListener("click", async () => {
            answer = document.getElementById("popupAnswer").value;
            if (!cameBack && popupdataAns[7].has(answer.toLowerCase())) {
              document.getElementById("popupAnswer").value = "";
              closePopup();

              showPopup(
                popupdataQuestions[12].title,
                popupdataQuestions[12].message,
                "block"
              );

              document
              .getElementById("popupSend")
              .addEventListener("click", async () => {
                answer = document.getElementById("popupAnswer").value;
                if (!cameBack && popupdataAns[8].has(answer.toLowerCase())) {
                  document.getElementById("popupAnswer").value = "";
                  closePopup();

                  showPopup(
                    popupdataQuestions[13].title,
                    popupdataQuestions[13].message,
                    "none"
                  );

                  let locationPolylineBritishLibraryToMetaKingCross = new Polyline3DElement({
                    altitudeMode: AltitudeMode.CLAMP_TO_GROUND,
                    strokeColor: "red",
                    strokeWidth: 20,
                    coordinates: locationPointsBritishLibraryToMetaKingCross,
                  });

                  map3DElement.append(locationPolylineBritishLibraryToMetaKingCross);
                }
              }); 

            }
          });

        
        }

      });  
    }

    }

    if(event.placeId === "ChIJATQkQpYbdkgRjY-N0puZt8o") {
      showPopup(
        popupdataQuestions[14].title,
        popupdataQuestions[14].message,
        "none"
      );

      cameBack = true;
    }

    if(event.placeId === "ChIJ98CZIJrHh0gRWApM5esemkY") {
        showPopup(
          popupdataQuestions[16].title,
          popupdataQuestions[16].message,
          "block"
        );

        document
        .getElementById("popupSend")
        .addEventListener("click", async () => {
          answer = document.getElementById("popupAnswer").value;
          if (popupdataAns[10].has(answer.toLowerCase())) {
            document.getElementById("popupAnswer").value = "";
            closePopup();

            showPopup(
              popupdataQuestions[17].title,
              popupdataQuestions[17].message,
              "none"
            );
          }
        });
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
