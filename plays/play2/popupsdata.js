const popupdataQuestions = [
  {
    title: "Who?",
    message:
      "Who was the Headmaster of the Hogwarts school when Harry Potter got admitted?",
  },
  {
    title: "Gatekeeper",
    message: "What is the name of the gatekeeper of the Hogwarts school?",
  },
  {
    title: "Museums",
    message: "How many Museums you can identify near the Alnwick?",
  },
  {
    title: "Unlocked the gate of Alnwick",
    message:
      "Luna is on gate for giving us the next location. Now you need to go to the Glenfinnan Viaduct to get more clues to identify where to go for the elder wand",
  },
  {
    title: "Glenfinnan Viaduct: The Hogwarts Express Route",
    message:
      "This iconic railway bridge has become synonymous with the magical world of Harry Potter. Its sweeping arches and breathtaking views were immortalized in the films as the route of the Hogwarts Express, the train that whisks young witches and wizards away to their second home, Hogwarts School of Witchcraft and Wizardry. Click on Glenfinnan Viaduct",
  },
  {
    title: "Platform number ----",
    message:
      "From which platform number Hogwarts Express takes wizards for the Hogwarts?",
  },
  {
    title: "King Cross",
    message:
      "Welcome to King's Cross Station, a seemingly ordinary train hub hiding extraordinary magic! This iconic location is where young witches and wizards begin their journey to Hogwarts, boarding the Hogwarts Express from the hidden Platform 9¾. As you stand here, imagine the hustle of muggle travelers, unaware of the magical passage concealed between platforms. The barrier to Platform 9¾ holds the key to countless adventures, friendships, and the legacy of the Wizarding World. But today, this station holds more than just memories—it hides a clue tied to the Elder Wand. Search carefully, for the secrets of this magical gateway might just reveal your next destination! Click on King Cross station to proceed",
  },
  {
    title: "Land of the Crown",
    message:
      "This place gave us Shakespeare and The Beatles, Its flag has red, white, and blue sequels. It’s the home of the Queen, What is the name we mean?",
  },
  {
    title: "A Place of Knowledge",
    message:
      "I’m a house where wisdom grows, With rows of books in endless rows. Readers and writers find me merry, What am I? Think literary!",
  },
  {
    title: "British Library",
    message:
      "With your answers, the path becomes clear— British and Library lead you to the next step of your journey! The British Library, a treasure trove of ancient manuscripts, enchanted texts, and untold knowledge, awaits your arrival. This grand repository of wisdom has seen wizards, scholars, and dreamers seek its secrets. Within its halls, you'll uncover riddles designed to test your intellect and guide you to the ultimate destination of the Elder Wand. Prepare your mind, sharpen your wits, and head to the British Library, where the answers to the most magical questions lie waiting! Go to British Library present near you and click on it to proceed",
  },
  {
    title: "Unseen by All",
    message:
      "I am always there but cannot be seen. I can be felt but not touched. I grow when shared and die when kept. What am I?",
  },
  {
    title: "The Endless Traveler",
    message:
      "I have cities but no houses, forests but no trees, and rivers but no water. What am I?",
  },
  {
    title: "Present but can't see",
    message:
      "I have no beginning. I have no end. I am always present, and always will be. What am I?",
  },
  {
     title : "Head there",
     message : "Congratulations! You have unlocked the final destination to get the location where The Elder Wand is located. To get this information you need to visit Meta King Cross and get back to The British Library to go final destination."
  },
  {
   title : "Owners of Wand",
   message : "Harry Potter, Draco Malfoy, Albus Dumbeldore were the last three owners of The Elder Wand"
  },
  {
    title : "Last three owners",
    message : "Mention first name of the last three owners of the Elder Wand"
  },
  {
    title : "The Elder Wand Awaits",
    message : "Crafted by Death itself, its power immense, A wand of legend, a tool most intense. Tell me now, what makes it whole— It's master, its brothers, or the tale untold?"
  }, {
    title : "The Elder Wand is yours from now",
    message : "Congratulations, brave adventurer! You have traversed great distances, solved perplexing riddles, and proven yourself worthy. The Elder Wand, an artifact of immense power and mystery, is now yours to command. But remember, with great power comes great responsibility. As you hold the wand, the magical world acknowledges your triumph. The ministers you saved whisper your name with gratitude, and even the darkest of wizards fear your resolve. This is your story, your legacy. Well done, hero!"
  }
];

const popupdataAns = [
  new Set(["albus dumbeldore", "albus", "dumbeldore"]),
  new Set(["rubeus hagrid", "rubeus", "hagrid"]),
  new Set(["2", "two"]),
  new Set(["93/4", "9 3/4", "9 3 / 4", " 9¾", "platform 9¾"]),
  new Set([
    "british",
    "britain",
    "great britain",
    "u.k",
    "uk",
    "england",
    "english",
    "united kingdom",
  ]),
  new Set(["library"]),
  new Set(["the secret", "a secret", "secret"]),
  new Set(["a map", "map", "the map"]),
  new Set(["time", "history"]),
  new Set(["harry draco albus", "harry, draco, albus"]),
  new Set(["the master of death", "master of death", "deathly hallows", "true owner", "power of wand"])
];

export { popupdataQuestions, popupdataAns };
