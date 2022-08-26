var homeCount = document.querySelector(".home-count");
var guestCount = document.querySelector(".guest-count");

var count1 = homeCount.innerHTML;
var count2 = guestCount.innerHTML;

function addOne(){
    count1++;
    homeCount.innerHTML = count1;
}
function addTwo(){
    count1 = count1 + 2;
    homeCount.innerHTML = count1;
}
function addThree(){
    count1 = count1 + 3;
    homeCount.innerHTML = count1;
}
function addOne2(){
    count2++;
    guestCount.innerHTML = count2;
}
function addTwo2(){
    count2 = count2 + 2;
    guestCount.innerHTML = count2;
}
function addThree2(){
    count2 = count2 + 3;
    guestCount.innerHTML = count2;
}
function gameOver(){
    homeCount.innerHTML = 0;
    guestCount.innerHTML = 0;
}