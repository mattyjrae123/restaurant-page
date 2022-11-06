const generateContactDetails = (description, details) => {
  const li = document.createElement('li');

  const descSpan = document.createElement('span');
  descSpan.textContent = `${description}:`;

  const detailSpan = document.createElement('span');
  detailSpan.textContent = `${details}`;

  li.append(descSpan, detailSpan);

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

  ul.append(generateContactDetails('Address', '324 Big Fisher Ave'),
            generateContactDetails('Phone number', '01 234 5678'),
            generateContactDetails('E-mail', 'example.one@two.com'));

  contactDiv.append(h1, ul);

  return contactDiv;
})();
