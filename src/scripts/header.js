import logo from '../images/logo-md.png';

/**
 * Generates all html content for page header, and appends it to the
 * div#content element
 */
export default function generateHeader() {
  const header = document.createElement('header');

  const img = document.createElement('img');
  img.setAttribute('id', 'logo');
  img.setAttribute('src', logo);
  img.setAttribute('alt', 'Burger logo');
  img.setAttribute('height', '100');
  img.setAttribute('width', '193');

  header.appendChild(img);
  document.querySelector('div#content').appendChild(header);
}
