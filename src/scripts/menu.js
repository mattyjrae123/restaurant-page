const generateMenuItems = (name, price) => {
  const li = document.createElement('li');

  const nameSpan = document.createElement('span');
  nameSpan.textContent = name;

  const priceSpan = document.createElement('span');
  priceSpan.textContent = `$${price}`;

  li.append(nameSpan, priceSpan);

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

  // 'Starters' list
  const startersUl = document.createElement('ul');
  startersUl.append(generateMenuItems('Grass toast', 0.99),
                    generateMenuItems('Cheese toast', 3.99),
                    generateMenuItems('Marmite toast', 2.99),
                    generateMenuItems('Jalapenos and salami', 9.99));

  // 'Mains' list
  const mainsUl = document.createElement('ul');
  mainsUl.append(generateMenuItems('Lamb rack', 19.99),
                 generateMenuItems('Cumin spicy beetroot', 17.85),
                 generateMenuItems('Tuna quiche', 99.05),
                 generateMenuItems('Exquisite roast yams', 39.99),
                 generateMenuItems('Blanched turkey', 19.07));

  menuDiv.append(h1, startersHeading, startersUl, mainsHeading, mainsUl);

  return menuDiv;
})();
