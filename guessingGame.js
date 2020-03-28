var randomColor = document.querySelector("#randomColor");
var newColors = document.querySelector("#newColors");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var result = document.querySelector("#result");
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");

var num = 6;
var disColor = generateRandomColor();
randomColor.textContent = disColor;
hard.classList.add("selects");
generateSixColor();

function generateRandomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

newColors.addEventListener("click",function(){
	reset();
})

function generateRandomNum(){
	return Math.floor(Math.random()*num);
}

function generateSixColor(){
	var j = generateRandomNum();
	for(var i = 0; i < squares.length; ++i){
		if(i === j){
			squares[i].style.background = disColor;
		}
		else if(i < num){
			squares[i].style.background = generateRandomColor();
		}
		else{
			squares[i].style.background = "#232323";
		}
	}
}

for(var i = 0; i < squares.length; ++i){
	squares[i].addEventListener("click", function(){
		if(disColor === this.style.background){
			h1.style.background = disColor;
			result.textContent = "Correct!";
			newColors.textContent = "PLAY AGAIN?";
			for(var k = 0; k < squares.length; ++k){
				if(k >= num){
					squares.style.background = "#232323";
				}
				else{
					squares[k].style.background = disColor;
				}
			}
		}
		else{
			this.style.background = "#232323";
			result.textContent = "Try Again";
		}
	})
}

function reset(){
	h1.style.background = "steelblue";
	disColor = generateRandomColor();
	randomColor.textContent = disColor;
	generateSixColor();
	result.textContent = "";
	newColors.textContent = "NEW COLORS";
}

hard.addEventListener("click", function(){
	num = 6;
	easy.classList.remove("selects");
	hard.classList.add("selects");
	reset();
})

easy.addEventListener("click",function(){
	num = 3;
	easy.classList.add("selects");
	hard.classList.remove("selects");
	reset();
})
