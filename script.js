const errorElement = document.querySelector('.form-error-message');
const seeProjectButtons = document.querySelectorAll('.see-project-button');
const emailInput = document.querySelector('input[type="email"]');
const fullName = document.getElementById('form-name');
const messageField = document.getElementById('form-message');
const submit = document.querySelector('button[type="submit"]');
const formReset = document.querySelector('button[type="reset"]');
const formInput = { name: '', email: '', message: '' };
const myPortfolio = [
  {
    title: 'My Title',
    description: 'Brief description',
    techList: ['html', 'bootstrap', 'Ruby'],
  },
  {
    title: 'My Title',
    description: 'Brief description',
    techList: ['html', 'bootstrap', 'Ruby'],
  },
];

function addCards(i) {
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
  button.classList.add('see-project-button');
  button.textContent = 'See Project';
  button.classList.add('disappear');
  cardContainer.classList.add('cards');
  cardContent.classList.add('content');
  techContainer.classList.add('other-cards-info');
  techContainer.classList.add('languages');
  cardTitle.textContent = myPortfolio[i].title;
  cardDescription.textContent = myPortfolio[i].description;
  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardDescription);
  cardContent.appendChild(techContainer);
  cardContainer.appendChild(cardContent);
  cardContainer.appendChild(button);
  document.querySelector('.work-card-container').appendChild(cardContainer);
}

for (let i = 0; i < myPortfolio.length; i += 1) {
  addCards(i);
}

const cards = document.querySelectorAll('.cards');
cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.firstChild.classList.toggle('content-hover');
    card.lastChild.classList.toggle('disappear');
  });
});

cards.forEach((card) => {
  card.addEventListener('mouseleave', () => {
    card.firstChild.classList.toggle('content-hover');
    card.lastChild.classList.toggle('disappear');
  });
});

if (localStorage.contactForm) {
  formInput.name = JSON.parse(localStorage.contactForm).name;
  formInput.email = JSON.parse(localStorage.contactForm).email;
  formInput.message = JSON.parse(localStorage.contactForm).message;
  fullName.value = formInput.name;
  emailInput.value = formInput.email;
  messageField.value = formInput.message;
}

formReset.addEventListener('click', () => {
  localStorage.clear();
});

fullName.addEventListener('input', () => {
  formInput.name = fullName.value;
  localStorage.setItem('contactForm', JSON.stringify(formInput));
});

emailInput.addEventListener('input', () => {
  formInput.email = emailInput.value;
  localStorage.setItem('contactForm', JSON.stringify(formInput));
});

messageField.addEventListener('input', () => {
  formInput.message = messageField.value;
  localStorage.setItem('contactForm', JSON.stringify(formInput));
});

document.querySelector('.menu-button').addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.toggle('appear');
  document.querySelector('.menu-button').classList.toggle('cross-button');
});

const navItems = document.querySelectorAll('.mobile-menu li a');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.toggle('appear');
    document.querySelector('.menu-button').classList.toggle('cross-button');
  });
});

seeProjectButtons.forEach((i) => {
  i.addEventListener('click', () => {
    document
      .querySelector('.project-details-modal-background')
      .classList.toggle('disappear');
  });
});

document.querySelector('.dark-cross-button').addEventListener('click', () => {
  document
    .querySelector('.project-details-modal-background')
    .classList.toggle('disappear');
});

function showError(event) {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    errorElement.textContent = '*The email should be in lowercase.';
    event.preventDefault();
  }
  if (!emailInput.validity.valid) {
    errorElement.textContent = '*Please enter the correct email address.';
    event.preventDefault();
  }
  setTimeout(() => {
    errorElement.textContent = '';
  }, 3000);
}

submit.addEventListener('click', showError);