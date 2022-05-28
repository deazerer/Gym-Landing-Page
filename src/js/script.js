let modal = document.getElementById('myModal');
let openbtn = document.getElementById('openmodal'); 
let VideoModalOverlay = document.getElementById('myModalOverlay');
let closebtn = document.getElementById('closeModal');

function toggleVideo(state) {     
    let iframe = modal.getElementsByTagName("iframe")[0].contentWindow;   
    modal.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}
function toLayOpacity(){
    closebtn.style.opacity = "1";
}
function toDelayOpacity(){
    closebtn.style.opacity = "0.3";
}
function denyScroll(){
    document.body.style.overflow = "hidden";
}
function allowScroll(){
    document.body.style.overflow = "";
}
openbtn.addEventListener('click', function(){
    denyScroll();
    toggleVideo();
    modal.style.display = "flex";
    modal.style.opacity = "1";
});
VideoModalOverlay.addEventListener('click', function(){
    modal.style.display = "none";
    allowScroll();
    toggleVideo('hide');
});
let burgermenu = document.getElementById('BurgerLinks');
let ModalBurger = document.getElementById('burgerModal');
let ModalBurgerOverlay = document.getElementById('burgerModalOverlay');
let Burger = document.getElementById('Burger');
burgermenu.addEventListener("click", function(){
    denyScroll();
    Burger.style.width = '30px';
    Burger.style.transition = '0.3s';
    ModalBurger.classList.add('active');
    ModalBurgerOverlay.classList.add('active');
    ModalBurgerOverlay.style.position = "fixed";
});
ModalBurgerOverlay.addEventListener('click', function(){
    allowScroll();
    Burger.style.width = '15px';
    Burger.style.transition = '0.3s';
    ModalBurger.classList.remove('active');
    ModalBurgerOverlay.classList.remove('active');
    ModalBurgerOverlay.style.position = "absolute";
});
const opinionsPagination = document.querySelector('.pagination');
const opinionsPaginationLines = document.querySelector('.pagination-lines');
const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 100,
    direction: 'horizontal',
    loop: true,
    pagination: {
      clickable: true,
      type: 'custom',
      bulletClass: 'pagination',
      bulletActiveClass: 'pagination-line-active',
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      }
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            direction: 'vertical',
        },
        767: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
  });

const opinionsSwiper = document.querySelector('.swiper').swiper;
const opinionsBtnPrev = document.querySelector('.prevBtn');
const opinionsBtnNext = document.querySelector('.nextBtn');

opinionsBtnPrev.addEventListener('click', function(){
    opinionsSwiper.slidePrev();
});
opinionsBtnNext.addEventListener('click', function(){
    opinionsSwiper.slideNext();
});


