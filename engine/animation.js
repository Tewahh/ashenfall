export function flashElement(element) {
  element.classList.add('flash');

  setTimeout(() => {
    element.classList.remove('flash');
  }, 200);
}
