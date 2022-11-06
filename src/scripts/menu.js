const generateMenuItems = (name, price) => {
  const li = document.createElement('li');

  const nameSpan = document.createElement('span');
  nameSpan.textContent = name;

  const priceSpan = document.createElement('span');
  priceSpan.textContent = `$${price}`;

  li.appendChild(nameSpan);
  li.appendChild(priceSpan);

  return li;
};

/**
 * Generates all html content for menu page, and returns it as an object
 */
 export default (() => {
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('id', 'menu');

  // Headings
  const h1 = document.createElement('h1');
  h1.textContent = 'Menu';

  const startersHeading = document.createElement('h2');
  startersHeading.textContent = 'Starters';

  const mainsHeading = document.createElement('h2');
  mainsHeading.textContent = 'Mains';

  const startersUl = document.createElement('ul');
  startersUl.appendChild(generateMenuItems('Grass toast', 0.99));

  menuDiv.appendChild(h1);
  menuDiv.appendChild(startersHeading);
  menuDiv.appendChild(startersUl);
  menuDiv.appendChild(mainsHeading);

  return menuDiv;
})();
