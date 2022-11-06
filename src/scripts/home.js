/**
 * Generates all html for home page, and returns it as an object
 */
export default (() => {
  const homeDiv = document.createElement('div');
  homeDiv.setAttribute('id', 'home');

  const h1 = document.createElement('h1');
  h1.textContent = 'Burger Shop';

  const h2 = document.createElement('h2');
  h2.textContent = 'Our Story';

  const p1 = document.createElement('p');
  p1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                 + 'Mauris porttitor tellus non arcu euismod faucibus.'
                 + ' Aliquam hendrerit odio id euismod volutpat. Donec'
                 + ' scelerisque ac mauris vel eleifend. Curabitur ut massa'
                 + ' tempus dolor scelerisque blandit nec a leo. Fusce varius'
                 + 'accumsan pharetra. Curabitur ultrices eu lectus vel' +
                 + ' fringilla.';

  const p2 = document.createElement('p');
  p2.textContent = 'Fusce cursus magna arcu, sed pulvinar nisi bibendum id.'
                 + 'Nulla rhoncus, purus at pretium blandit, erat urna '
                 + ' tincidunt tellus, eu pulvinar arcu odio in magna.'
                 + 'Curabitur vulputate mattis ligula, vel venenatis urna.'
                 + 'Duis gravida porta nisl, consequat convallis ligula'
                 + ' ultricies ut.';

  const p3 = document.createElement('p');
  p3.textContent = 'Mauris efficitur pellentesque lorem at scelerisque. Ut '
                 + 'pulvinar dapibus sapien, sit amet aliquet turpis feugiat '
                 + 'non. Vestibulum non lacus varius, convallis nisi et, '
                 + 'euismod augue. Phasellus sodales elit eu enim dictum, '
                 + 'vitae iaculis leo scelerisque. Nullam vitae elementum '
                 + 'eros.';

  homeDiv.append(h1, p1, h2, p2, p3);
  
  return homeDiv
})();