export default (dataObject) => {
  const {
    title, techList, detailedDes, image, briefDes,
  } = dataObject[0];
  document.querySelector('.modal').innerHTML = `<div class="project-details-modal-background">
    <div class="project-details-modal">
        <div class="project-modal-header">
            <div class="modal-head">
                <h3 class="modal-heading-mobile">${title}</h3>
                <h3 class="modal-heading-desktop">${briefDes}</h3>
                <i class="dark-cross-button"></i>
            </div>
            <ul class="languages">
            </ul>
        </div>
        <div class="modal-content">
            <img src=${image} alt="Portfolio snapshot image">
            <div class="modal-lower-half">
                <p>${detailedDes}</p>
                <div class="modal-buttons">
                    <div class="btns"><span>See Live</span> <i class="live-icon"></i></div>
                    <div class="btns"><span>See Source</span> <i class="source-icon"></i> </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
  const techs = document.querySelector('.project-details-modal .languages');
  techList.forEach((tech) => {
    const list = document.createElement('li');
    list.innerHTML = `<span>${tech}</span>`;
    techs.appendChild(list);
  });
  document.querySelector('.dark-cross-button').addEventListener('click', () => {
    document.querySelector('.project-details-modal-background').remove();
  });
};