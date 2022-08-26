var drumkit = document.querySelectorAll(".drum");
var noOfDrum = document.querySelectorAll(".drum").length;

for(var i =0 ; i< noOfDrum ;i++){
    drumkit[i].addEventListener("click",function (){
        
        var innerHtmlButton = this.innerHTML;
        
        play(innerHtmlButton); 

        animeButton(innerHtmlButton);
    });
}

document.addEventListener("keypress" , function(event){
    play(event.key);
    animeButton(event.key);
});

function play(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break; 
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break; 

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break; 

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break; 

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break; 

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break; 

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
        // default: console.log(innerHtmlButton);

    }
}

function animeButton(btnType){
    var activButton = document.querySelector("." + btnType);
    activButton.classList.add("pressed");

    setTimeout(function(){
         activButton.classList.remove("pressed");
    } , 100);
}