let modal = document.getElementById('myModal');
let openbtn = document.getElementById('openmodal');
let modalOverlay = document.getElementById('myModalOverlay');
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

openbtn.onclick = function(){
    toggleVideo();
    modal.style.display = "flex";
    modal.style.opacity = "1";
};
modalOverlay.onclick = function(){
    modal.style.display = "none";
    toggleVideo('hide');
};

