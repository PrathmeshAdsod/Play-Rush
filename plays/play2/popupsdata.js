

const popupdataQuestions = [
    {
        title : "Who?",
        message : "Who was the Headmaster of the Hogwarts school when Harry Potter got admitted?"
    },
    {
        title : "Gatekeeper",
        message : "What is the name of the gatekeeper of the Hogwarts school?"
    },
    {
        title : "Museums",
        message : "How many Museums you can identify near the Alnwick?"
    },
    {
        title : "Unlocked the gate of Alnwick",
        message : "Luna is on gate for giving us the next location. Now you need to go to the Glenfinnan Viaduct to get more clues to identify where to go for the elder wand"
    }, 
    {
        title : "Glenfinnan Viaduct: The Hogwarts Express Route",
        message : "This iconic railway bridge has become synonymous with the magical world of Harry Potter. Its sweeping arches and breathtaking views were immortalized in the films as the route of the Hogwarts Express, the train that whisks young witches and wizards away to their second home, Hogwarts School of Witchcraft and Wizardry. Click on Glenfinnan Viaduct"
    },
    {
        title : "Platform number ----",
        message : "From which platform number Hogwarts Express takes wizards for the Hogwarts?"
    }
    
]

const popupdataAns = [
    
    new Set(["albus dumbeldore", "albus", "dumbeldore"]),
    new Set(["rubeus hagrid", "rubeus", "hagrid"]),
    new Set(["2", "two"]),
    new Set(["93/4", "9 3/4", "9 3 / 4", " 9¾", "platform 9¾"])
    
]

export {popupdataQuestions, popupdataAns};