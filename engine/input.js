export function setupKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key === '1') clickChoice(0);
    if (e.key === '2') clickChoice(1);
    if (e.key === '3') clickChoice(2);
  });
}

function clickChoice(i) {
  const buttons = document.querySelectorAll('#choices button');

  if (buttons[i]) buttons[i].click();
}
