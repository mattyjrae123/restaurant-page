import header from './header.js'
import home from './home.js';
import menu from './menu.js';
import contact from './contact';
import '../styles/style.css';

const main = document.createElement('main');

document.querySelector('div#content').append(header, main);

const homeBtn = document.querySelector('button[data-page="home"]');
const menuBtn = document.querySelector('button[data-page="menu"]');
const contactBtn = document.querySelector('button[data-page="contact"]');

homeBtn.addEventListener('click', (e) => navBtnListener(home, e));
menuBtn.addEventListener('click', (e) => navBtnListener(menu, e));
contactBtn.addEventListener('click', (e) => navBtnListener(contact, e));

const navBtnListener = (domElement, e) => {
  if (main.firstChild !== domElement) {
    if (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    main.appendChild(domElement);

    homeBtn.classList.remove('active-menu');
    menuBtn.classList.remove('active-menu');
    contactBtn.classList.remove('active-menu');
    e.target.classList.add('active-menu');
  }
};

homeBtn.click();
