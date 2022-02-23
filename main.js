function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)return; //empêche le code de tourner pour toutes les touches
    audio.currentTime = 0; //retour du son au début quand je réappuie sur la touche
    audio.play();
    key.classList.add('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition)
});



function removeTransition(e) {
    if(e.propertyName = 'transform'){
        this.classList.remove('playing');
    }
}

window.addEventListener("keydown", playSound);