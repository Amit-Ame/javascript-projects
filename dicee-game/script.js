var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);

var leftImage = document.querySelectorAll("img")[0];
leftImage.setAttribute("src", `images/dice` + randomNumber1 + `.png`);

var rightImage = document.querySelectorAll("img")[1];
rightImage.setAttribute("src", `images/dice` + randomNumber2 + `.png`);


var title = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  title.textContent =  " Player 1 wins ";
} else if (randomNumber1 == randomNumber2) {
  title.textContent = "It's a Draw ";
} else {
  title.textContent = "Player 2 wins ";
}
