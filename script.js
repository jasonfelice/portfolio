const seeProjectButtons = document.querySelectorAll('.see-project-button');
const emailInput = document.querySelector('input[type="email"]');
const errorElement = document.querySelector('.form-error-message');
const submit = document.querySelector('button[type="submit"]');


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

submit.addEventListener('click', showError)

function showError(event) {
  if(emailInput.value !== emailInput.value.toLowerCase()) {
    errorElement.textContent = "*The email should be in lowercase.";
    event.preventDefault();
  }
  if(!emailInput.validity.valid) {
    errorElement.textContent = "*Please enter the correct email address.";
    event.preventDefault();
  }
}