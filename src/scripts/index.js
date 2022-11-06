import header from './header.js'
import home from './home.js';
import menu from './menu.js';
import contact from './contact';
import '../styles/style.css';

const main = document.createElement('main');
main.appendChild(home);

document.querySelector('div#content').appendChild(header);
document.querySelector('div#content').appendChild(main);

document.querySelector('button[data-page="home"]')
        .addEventListener('click', () => navBtnListener(home));

document.querySelector('button[data-page="menu"]')
        .addEventListener('click', () => navBtnListener(menu));

document.querySelector('button[data-page="contact"]')
        .addEventListener('click', () => navBtnListener(contact));

const navBtnListener = (domElement) => {
  if (main.firstChild !== domElement) {
    main.removeChild(main.firstChild);
    main.appendChild(domElement);
  }
};
