export const npcs = {
  elder: {
    root: {
      text: 'Welcome traveler.',
      choices: [{ text: 'Who are you?', next: 'who' }, { text: 'Leave' }],
    },

    who: {
      text: 'I guard the forest.',
      choices: [{ text: 'Leave' }],
    },
  },
};
