import header from './header.js'
import home from './home.js';
import '../styles/style.css';

const main = document.createElement('main');
main.appendChild(home);

document.querySelector('div#content').appendChild(header);
document.querySelector('div#content').appendChild(main);

document.querySelector('button[data-page="home"]')
        .addEventListener('click', () => {
          if (main.firstChild === home) {
            return;
          }

          clearMain();
          main.appendChild(home);
  });

document.querySelector('button[data-page="menu"]')
        .addEventListener('click', () => {
          clearMain();
  });

document.querySelector('button[data-page="contact"]')
        .addEventListener('click', () => {
          clearMain();
  });

const clearMain = () => {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}
