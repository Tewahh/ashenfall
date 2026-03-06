import { npcs } from '../data/npcs.js';

export function talkTo(name) {
  let npc = npcs[name];

  showDialogue(npc.root);
}

function showDialogue(node) {
  let d = node.text;

  let choices = node.choices;

  // render dialogue
}
