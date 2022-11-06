/**
 * Generates all html for home page, and returns it as an object
 */
export default (() => {
  const homeDiv = document.createElement('div');
  homeDiv.setAttribute('id', 'home');

  const h1 = document.createElement('h1');
  h1.textContent = 'Burger Shop';

  homeDiv.appendChild(h1);

  return homeDiv
})();