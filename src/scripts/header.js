import logo from '../images/logo-md.png';

/**
 * Generates all html content for page header, and returns it as an object
 */
export default (() => {
  const header = document.createElement('header');

  // LOGO IMAGE
  const img = document.createElement('img');
  img.setAttribute('id', 'logo');
  img.setAttribute('src', logo);
  img.setAttribute('alt', 'Burger logo');
  img.setAttribute('height', '100');
  img.setAttribute('width', '193');

  // NAVIGATION BUTTONS
  const navBtn1 = document.createElement('button');
  navBtn1.classList.add('nav-link');
  navBtn1.textContent = 'Home';

  const navBtn2 = document.createElement('button');
  navBtn2.classList.add('nav-link');
  navBtn2.textContent = 'Menu';

  const navBtn3 = document.createElement('button');
  navBtn3.classList.add('nav-link');
  navBtn3.textContent = 'Contact';

  // NAV ELEMENT
  const nav = document.createElement('nav');

  nav.appendChild(navBtn1);
  nav.appendChild(navBtn2);
  nav.appendChild(navBtn3);

  // APPEND TO HEADER

  header.appendChild(img);
  header.appendChild(nav);

  return header;
})();
