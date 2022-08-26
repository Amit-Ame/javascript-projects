let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

var password1 = "";
var password2 = "";
var length = characters.length;

// 



function generate(){
    password1 = "";
    password2 = "";
    for(let i =0; i< 10 ; i++){
        var randomNumber1 = Math.floor(Math.random() * length );
        var randomNumber2 = Math.floor(Math.random() * length );
        password1 += characters[randomNumber1] ;
        password2 += characters[randomNumber2] ;
    }
     
    document.querySelector(".one").textContent=password1;
    document.querySelector(".two").textContent=password2;    
}