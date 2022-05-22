let modal = document.getElementById('myModal');
let openbtn = document.getElementById('openmodal'); 
let modalOverlay = document.getElementById('myModalOverlay');
let closebtn = document.getElementById('closeModal');
let burgermenu = document.getElementById('BurgerLinks');
let ModalBurger = document.getElementById('burgerModal');
let ModalBurgerOverlay = document.getElementById('burgerModalOverlay');

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
modalOverlay.onclick = function(){
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

burgermenu.addEventListener("click", function(){
    denyScroll();
    ModalBurger.classList.add('active');
    ModalBurgerOverlay.classList.add('active');
    ModalBurgerOverlay.style.position = "fixed";
});
ModalBurgerOverlay.onclick = function(){
    allowScroll();
    ModalBurger.classList.remove('active');
    ModalBurgerOverlay.classList.remove('active');
    ModalBurgerOverlay.style.position = "absolute";
}
