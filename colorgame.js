var squareColors = [];
var headerBackground = [];
//randomly choses colors
function getColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
//get button
var btn = document.querySelector(".btn");

//reload game
  //btn.addEventListener("click", function () {
  

//add colors to array
function generateColor(num) {
    for (var a = 0; a < num; a++) {
        squareColors.push(getColor());
        console.log(squareColors);
    }
};
generateColor(6);

//get all squares
var square = document.querySelectorAll(".squares");
//randomly select color from array
function randomPicker() {
    return Math.floor(Math.random() * squareColors.length)
}
//get the color we are supposed to guess
var pickedColor = squareColors[randomPicker()];
console.log("cul "+ pickedColor);
//gets the label on the title  that repres.. pickedcolor
var title = document.querySelector("span");
//gets where we return the boolean result(true or false)
var result = document.querySelector(".result");
//gets the header
var header = document.querySelector(".header");
//colors for header
function headerColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
//push colors for header into array
headerBackground.push(headerColor());
//set header backgground
header.style.background = headerBackground;


for (var i = 0; i < squareColors.length; i++) {
    //sets the colors of the squares depending on array
    square[i].style.background = squareColors[i];

    //checks if selected is true or false
    square[i].addEventListener("click", function () {
        var chosenColor = this.style.background;
        console.log(chosenColor + ":" + pickedColor)
        if (chosenColor === pickedColor) {
            result.textContent = "Correct!";
            color(pickedColor);
            header.style.background = pickedColor
        } else {
            result.textContent = "Try again";
            this.style.background = "rgb(20, 20, 20)";
        }
    });
}

//display color to be picked
title.textContent = "color " + pickedColor;

//change color when right ans is selected
function color(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = color;
    }
}