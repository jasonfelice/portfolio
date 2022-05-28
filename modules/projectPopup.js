export default (dataObject) => {
  document.querySelector('.modal').innerHTML = `<div class="project-details-modal-background disappear">
    <div class="project-details-modal">
        <div class="project-modal-header">
            <div class="modal-head">
                <h3 class="modal-heading-mobile">Multi Post Stories</h3>
                <h3 class="modal-heading-desktop">Keeping track of hundreds of components website</h3>
                <i class="dark-cross-button"></i>
            </div>
            <ul class="languages">
                <li><span>html</span></li>
                <li><span>Bootstrap</span></li>
                <li><span>Ruby on rails</span></li>
            </ul>
        </div>
        <div class="modal-content">
            <img src="images/portfolio/snapshoot-portfolio.png" alt="Portfolio snapshot image">
            <div class="modal-lower-half">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a
                    galley of type and scrambled it to make a type specimen book. It has survived not only
                    five
                    centuries, but also the leap into electronic typesetting, remaining essent</p>
                <div class="modal-buttons">
                    <div class="btns"><span>See Live</span> <i class="live-icon"></i></div>
                    <div class="btns"><span>See Source</span> <i class="source-icon"></i> </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
};