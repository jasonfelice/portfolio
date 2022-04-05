document.querySelector('.menu-button').addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.toggle('appear');
  document.querySelector('.menu-button').classList.toggle('cross-button');
});

for (let i = 0; i < document.querySelectorAll('.mobile-menu li a').length; i += 1) {
  const selectedElement = document.querySelectorAll('.mobile-menu li a')[i];
  selectedElement.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.toggle('appear');
    document.querySelector('.menu-button').classList.toggle('cross-button');
  });
}

for (let i = 0; i < document.querySelectorAll('.see-project-button').length; i += 1) {
  const selectedElement = document.querySelectorAll('.see-project-button')[i];
  selectedElement.addEventListener('click', () => {
    document.querySelector('.project-details-modal-background').classList.toggle('disappear');
  });
}

document.querySelector('.dark-cross-button').addEventListener('click', () => {
  document.querySelector('.project-details-modal-background').classList.toggle('disappear');
});