import logo from '../images/logo-md.png';

/**
 * Generates all html content for page header, and returns it as an object
 */
export default (() => {
  const header = document.createElement('header');

  const img = document.createElement('img');
  img.setAttribute('id', 'logo');
  img.setAttribute('src', logo);
  img.setAttribute('alt', 'Burger logo');
  img.setAttribute('height', '100');
  img.setAttribute('width', '193');

  header.appendChild(img);
  
  return header;
})();
