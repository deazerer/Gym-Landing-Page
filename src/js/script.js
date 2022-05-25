let modal = document.getElementById('myModal');
let openbtn = document.getElementById('openmodal'); 
let VideoModalOverlay = document.getElementById('myModalOverlay');
let closebtn = document.getElementById('closeModal');
let ModalBurger = document.getElementById('burgerModal');
let ModalBurgerOverlay = document.getElementById('burgerModalOverlay');
let Burger = document.getElementById('Burger');

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

openbtn.onclick = function(){
    denyScroll();
    toggleVideo();
    modal.style.display = "flex";
    modal.style.opacity = "1";
};
VideoModalOverlay.onclick = function(){
    modal.style.display = "none";
    allowScroll();
    toggleVideo('hide');
};

function denyScroll(){
    document.body.style.overflow = "hidden";
}

function allowScroll(){
    document.body.style.overflow = "";
}
let burgerMenu = document.querySelector('.burger');
let burgerWrapper = document.querySelector('.burger-wrapper');
burgerWrapper.addEventListener("click", function(){
    denyScroll();
    burgerMenu.classList.add('active')
    ModalBurger.classList.add('active');
    ModalBurgerOverlay.classList.add('active');
    ModalBurgerOverlay.style.position = "fixed";
});
ModalBurgerOverlay.onclick = function(){
    allowScroll();
    burgerMenu.classList.remove('active')
    ModalBurger.classList.remove('active');
    ModalBurgerOverlay.classList.remove('active');
    ModalBurgerOverlay.style.position = "absolute";
}
const closeModalBtn = document.querySelector('.modal-burger-closebtn')
 closeModalBtn.addEventListener('click', ()=>{
     ModalBurger.classList.remove('active');
     burgerMenu.classList.remove('active')
     ModalBurgerOverlay.style.position = 'absolute';
     allowScroll();
     ModalBurgerOverlay.classList.remove('active');
 })
