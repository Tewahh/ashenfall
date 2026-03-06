export function saveGame(slot, state, currentScene) {
  const data = {
    scene: currentScene,
    state: state,
  };

  localStorage.setItem('ashenfall_save_' + slot, JSON.stringify(data));

  console.log('Game saved to slot', slot);
}

export function loadGame(slot) {
  const save = localStorage.getItem('ashenfall_save_' + slot);

  if (!save) return null;

  return JSON.parse(save);
}

export function deleteSave(slot) {
  localStorage.removeItem('ashenfall_save_' + slot);
}
