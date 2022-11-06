import header from './header.js'
import home from './home.js';
import '../styles/style.css';

const main = document.createElement('main');
main.appendChild(home);

document.querySelector('div#content').appendChild(header);
document.querySelector('div#content').appendChild(main);
