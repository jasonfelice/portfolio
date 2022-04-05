const seeProjectButtons = document.querySelectorAll('.see-project-button');

document.querySelector('.menu-button').addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.toggle('appear');
  document.querySelector('.menu-button').classList.toggle('cross-button');
});
const navItems = document.querySelectorAll('.mobile-menu li a');

// for (let i = 0; i < document.querySelectorAll('.mobile-menu li a').length; i += 1) {
//   const selectedElement = document.querySelectorAll('.mobile-menu li a')[i];
//   selectedElement.addEventListener('click', () => {
//     document.querySelector('.mobile-menu').classList.toggle('appear');
//     document.querySelector('.menu-button').classList.toggle('cross-button');
//   });
// }
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
