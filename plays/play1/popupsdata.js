const popupdataQuestions = [
  {
    // clues near efill tower
    title: "The Seat of Power",
    message:
      "In the heart of a nation's capital stands a grand residence painted in white, where leaders shape history and the world takes notice. Find the place where decisions echo across the globe. It is named with two words and white in color",
  },
  {
    // Lincoln Memorial
    title : "Memorial",
    message : "Across the reflecting pool stands a monument to a leader, the 16th president, who united a nation. Seek the marble figure seated within. It's nearby.... Do you know it?"
  },
  {
    // Scientist near road
    title : "Who is that Scientist",
    message : "Batman you reached from White House to here, you must know which famous scientist memorial you saw in way. Answer this and go to next target.. They need you..."
  },
  {
    // Royal palace
    title : "Welcome near to the Great Clock of Westminster",
    message : "Now your main work starts batman, newr big ben you have westminster bridge, do not take it and go its opposite direction and you will get one royal palace which is home of Monarch. Stop there. There is your new and important clue. Common you can save them. Good luck!"
  }
];

const popupdataAns = [
    new Set(["white house", "whitehouse"]),
    new Set(["lincoln memorial"]),
    new Set(["albert einstein"])
];

export { popupdataQuestions, popupdataAns };
