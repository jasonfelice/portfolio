const errorElement = document.querySelector('.form-error-message');
const seeProjectButtons = document.querySelectorAll('.see-project-button');
const emailInput = document.querySelector('input[type="email"]');
const fullName = document.getElementById('form-name');
const messageField = document.getElementById('form-message');
const submit = document.querySelector('button[type="submit"]');
let formInput = {name:'', email:'', message:''}

fullName.value = JSON.parse(localStorage.contactForm).name;
emailInput.value = JSON.parse(localStorage.contactForm).email;
messageField.value = JSON.parse(localStorage.contactForm).message;

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