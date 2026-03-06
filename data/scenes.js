export const scenes = {

    intro: {
      text: "You enter the world.",
      choices: [
        { text: "Start Adventure", next: "forest" }
      ]
    },
  
    forest: {
      text: "A wild wolf appears.",
      choices: [
        { text: "Fight Wolf", combat: "wolf" }
      ]
    },
  
    endingGood: {
      text: "You saved the world!",
      choices: [
        { text: "Restart", next: "intro" }
      ]
    },
  
    endingNeutral: {
      text: "You survived.",
      choices: [
        { text: "Restart", next: "intro" }
      ]
    }
  
  };