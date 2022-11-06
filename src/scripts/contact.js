const generateContactDetails = (description, details) => {
  const li = document.createElement('li');

  const descSpan = document.createElement('span');
  descSpan.textContent = `${description}:`;

  const detailSpan = document.createElement('span');
  detailSpan.textContent = `${details}`;

  li.appendChild(descSpan);
  li.appendChild(detailSpan);

  return li;
};

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

  ul.appendChild(generateContactDetails('Address', '324 Big Fisher Ave'));
  ul.appendChild(generateContactDetails('Phone number', '01 234 5678'));
  ul.appendChild(generateContactDetails('E-mail', 'example.one@two.com'));

  contactDiv.appendChild(h1);
  contactDiv.appendChild(ul);
  
  return contactDiv;
})();
