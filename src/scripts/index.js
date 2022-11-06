import header from './header.js'
import home from './home.js';
import '../styles/style.css';

const main = document.createElement('main');
main.appendChild(home);

document.querySelector('div#content').appendChild(header);
document.querySelector('div#content').appendChild(main);

document.querySelector('button[data-page="home"]')
        .addEventListener('click', () => {
          console.log('SSS');
  });

document.querySelector('button[data-page="menu"]')
        .addEventListener('click', () => {
          console.log('S2');
  });

document.querySelector('button[data-page="contact"]')
        .addEventListener('click', () => {
          console.log('SS3');
  });
