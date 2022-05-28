import projectPopup from './projectPopup.js';

export default (i, myPortfolio) => {
  const cardContainer = document.createElement('div');
  const cardContent = document.createElement('div');
  const cardTitle = document.createElement('h2');
  const cardDescription = document.createElement('p');
  const techContainer = document.createElement('ul');
  for (let k = 0; k < myPortfolio[i].techList.length; k += 1) {
    const list = document.createElement('li');
    list.textContent = myPortfolio[i].techList[k];
    techContainer.appendChild(list);
  }
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.setAttribute('id', `${myPortfolio[i].id}`);
  button.addEventListener('click', (e) => {
    projectPopup(myPortfolio.filter((d) => +e.target.id === d.id));
  });
  button.classList.add('see-project-button');
  button.textContent = 'See Project';
  button.classList.add('disappear');
  cardContainer.classList.add('cards');
  cardContent.classList.add('content');
  techContainer.classList.add('other-cards-info');
  techContainer.classList.add('languages');
  cardTitle.textContent = myPortfolio[i].title;
  cardDescription.textContent = myPortfolio[i].briefDes;
  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardDescription);
  cardContent.appendChild(techContainer);
  cardContainer.appendChild(cardContent);
  cardContainer.appendChild(button);
  document.querySelector('.work-card-container').appendChild(cardContainer);
};