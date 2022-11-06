/**
 * Generates all html content for contact page, and returns it as an object
 */
 export default (() => {
  const contactDiv = document.createElement('div');
  contactDiv.setAttribute('id', 'contact');

  // Heading
  const h1 = document.createElement('h1');
  h1.textContent = 'Contact Us';

  // Contact list
  const ul = document.createElement('ul');
  
  const address = document.createElement('li');
  const addressSpan1 = document.createElement('span');
  addressSpan1.textContent = 'Address';
  const addressSpan2 = document.createElement('span');
  addressSpan2.textContent = '324 Big Fisher Ave';

  address.appendChild(addressSpan1);
  address.appendChild(addressSpan2);

  ul.appendChild(address);

  contactDiv.appendChild(h1);
  contactDiv.appendChild(ul);
  return contactDiv;
})();
