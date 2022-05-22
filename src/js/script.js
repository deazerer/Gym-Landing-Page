let modal = document.getElementById('myModal');
let openbtn = document.getElementById('openmodal');
let modalOverlay = document.getElementById('myModalOverlay');
let videoframe = document.getElementById('videoframe');

openbtn.onclick = function(){
    modal.style.display = "flex";
    modal.style.opacity = "1";
};
modalOverlay.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
};
