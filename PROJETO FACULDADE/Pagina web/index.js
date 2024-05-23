
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("drum")) {
        var buttonInnerHTML = event.target.innerHTML.toLowerCase();
        handleInteraction(buttonInnerHTML);
    }
});

document.addEventListener("keypress", function(event) {
    var key = event.key.toLowerCase();
    handleInteraction(key);
});

function handleInteraction(key) {
    makeSound(key);
    buttonAnimation(key);
}

function makeSound(key) {
    var soundMap = {
        "a": "sounds/leftCrash.mp3",
        "s": "sounds/tom1.mp3",
        "d": "sounds/snare.mp3",
        "g": "sounds/kickbass.mp3",
        "j": "sounds/tom3.mp3",
        "k": "sounds/tom2.mp3",
        "l": "sounds/rightCrash.mp3"
    };
    
    var soundFile = soundMap[key];
    if (soundFile) {
        var audio = new Audio(soundFile);
        audio.play();
    } else {
        console.log(key);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
