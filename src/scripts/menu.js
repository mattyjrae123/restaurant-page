/**
 * Generates all html content for menu page, and returns it as an object
 */
 export default (() => {
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('id', 'menu');
  
  const h1 = document.createElement('h1');
  h1.textContent = 'Menu';

  const startersHeading = document.createElement('h2');
  startersHeading.textContent = 'Starters';

  const mainsHeading = document.createElement('h2');
  mainsHeading.textContent = 'Mains';

  menuDiv.appendChild(h1);
  menuDiv.appendChild(startersHeading);
  menuDiv.appendChild(mainsHeading);
  return menuDiv;
})();