

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var answer = document.querySelector("#answer");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	resetAll()
}
reset.addEventListener("click", function(){
	resetAll();
});
function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
	  modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("lightUp");
		modeButtons[1].classList.remove("lightUp");
		this.classList.add("lightUp");
		this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
		resetAll();
	  });
	}
}
function setupSquares(){
for(var i = 0; i < squares.length; i++){
	
      squares[i].addEventListener("click", function(){
    	var clickedColor = this.style.background;
    	if (clickedColor === pickedColor){
    		answer.textContent = "Correct!";
    		changeAll(clickedColor);
    		h1.style.background = clickedColor;
    		reset.textContent = "Play Again!";
    	} else {
    		this.style.background = "#232323";
    		answer.textContent = "Try Again";
    	}
      });
	}
}

function resetAll(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    answer.textContent = "";
    reset.textContent ="New Colors";
    colorDisplay.textContent = pickedColor;
     for (var i = 0; i < squares.length; i++){
     	if(colors[i]){
     		squares[i].style.display = "block";
 	   squares[i].style.background = colors[i];
     } else {
     	squares[i].style.display = "none";
     }
    h1.style.background = "steelblue";  
	}
}

colorDisplay.textContent = pickedColor;


function changeAll(color){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	arr = []
    for (var i = 0; i < num; i++){
    	arr.push(randomColor())
    }
	return arr;
}
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
