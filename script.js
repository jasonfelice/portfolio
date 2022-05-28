import addCards from './modules/addCard.js';
import myPortfolio from './modules/cardsData.js';

const errorElement = document.querySelector('.form-error-message');
const emailInput = document.querySelector('input[type="email"]');
const fullName = document.getElementById('form-name');
const messageField = document.getElementById('form-message');
const submit = document.querySelector('button[type="submit"]');
const formReset = document.querySelector('button[type="reset"]');
const formInput = { name: '', email: '', message: '' };

for (let i = 0; i < myPortfolio.length; i += 1) {
  addCards(i, myPortfolio);
}

const cards = document.querySelectorAll('.cards');
cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.firstChild.classList.toggle('content-hover');
    card.lastChild.querySelector('button').classList.toggle('disappear');
  });
});

cards.forEach((card) => {
  card.addEventListener('mouseleave', () => {
    card.firstChild.classList.toggle('content-hover');
    card.lastChild.querySelector('button').classList.toggle('disappear');
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