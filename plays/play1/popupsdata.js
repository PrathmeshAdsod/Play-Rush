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
  },
  {
    title : "Very Close to Save",
    message : "Where the trains rumble and art comes alive,A tunnel of colors where secrets survive.The ministers wait where the walls tell stories,Find the arches painted in endless glories. I am giving you the path, go and get your last clue, Mr. Batman"
  },
  {
    title : "Head to the castle",
    message : "Northward lies a fortress grand, With towers tall and centuries spanned. Where knights once gathered and battles raged. Harry Potter's school filmed here, the Hogwarts. The syndicate’s plot has now been staged."
  },
  {
    title : "Go and defeat them in The Alnwick Castle",
    message : "You found the Syndicate's location. They are in castle. You have to some riddles to unlock the gate of Alnwick castle. Be Ready and click on castle name"
  },
  {
    title : "Key 1",
    message : "In the halls where shadows dance, A voice repeats without a glance. To proceed, you must discern, What speaks yet does not learn." 
  },
  {
    title : "Key 2",
    message : "I measure the moments, Both fast and slow. I have three hands. Without me, the day You’d never know."
  },
  {
    title : "Key 3",
    message: "I’m hidden well from prying eyes, A narrow route beneath the skies. A secret path for those who know, Through me, unnoticed, you can go"
  },
  {
    title : "Victory Over the Syndicate!",
    message : "Against all odds, you have triumphed! The ministers are safe, the syndicate’s sinister plans are foiled, and peace is restored to the realm. Your wit, courage, and determination have proven unmatched. The legacy of your heroic deeds will echo through the ages!"
  }
  
];

const popupdataAns = [
    new Set(["white house", "whitehouse"]),
    new Set(["lincoln memorial"]),
    new Set(["albert einstein"]),
    new Set(["the alnwick castle", "alnwick castle", "alnwick"]),
    new Set(["an echo", "echo", "echos", "the echo"]),
    new Set(["the clock", "clock", "clocks", "time"]),
    new Set(["tunnel", "passage", "secret tunnel", "escape route", "underground tunnel", "the tunnel", "the passage", "the secret tunnel", "the escape route", "the underground tunnel"])
];

export { popupdataQuestions, popupdataAns };
