const reload = document.getElementById("reload");
reload.addEventListener('click', () => {
    location.reload();
    return false;
})


var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;

var image = "dice" + randomNumber1 + ".png";
var firstImage = "images/" + image;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", firstImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

var image = "dice" + randomNumber2 + ".png";
var firstImage = "images/" + image;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", firstImage);



if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}

else {
    document.querySelector("h1").innerHTML = "Play Again"
}