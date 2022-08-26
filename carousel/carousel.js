const slides = document.querySelectorAll(".carousel-items");
let slidePosition =0;
const totalSilde = slides.length;

document.querySelector(".carousel-button-prev").addEventListener("click" , movePrev);
document.querySelector(".carousel-button-next").addEventListener("click" , moveNext);


function hideSlides(){
    for(let s of slides){
        s.classList.remove("carousel-items-visible");
        s.classList.add("carousel-items");
    }
}
function moveNext(){
    hideSlides();

    if(slidePosition === totalSilde - 1 ){
        slidePosition = 0 ;
    }else{
        slidePosition++;
    }

    slides[slidePosition].classList.add("carousel-items-visible");
}

function movePrev(){
    hideSlides();

    if(slidePosition === 0){
        slidePosition = totalSilde -1;
    }else{
        slidePosition--;
    }

    slides[slidePosition].classList.add("carousel-items-visible");
}