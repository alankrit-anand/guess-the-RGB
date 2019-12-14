var numofsq=6;
var colors = generateColors(numofsq);

var container = document.querySelector("#container");
var heading = document.querySelector("h1");
var squares= document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var restart = document.querySelector("#restart");
var easy=document.querySelector("#easy");
var hard = document.querySelector("#hard");

var pickedColor = pickColor(colors,numofsq);

colorDisplay.textContent = pickedColor;

for(var i=0; i<numofsq; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		squareListener(this,length);
	});
}

restart.addEventListener("click", function(){
	if(numofsq===3)
		easy.dispatchEvent(new Event("click"));
	else
		hard.dispatchEvent(new Event("click"));

});

easy.addEventListener("click", function(){
	this.classList.add("selected");
	hard.classList.remove("selected");
	numofsq=3;
	colors = generateColors(numofsq);
	pickedColor = pickColor(colors,numofsq);
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
			squares[i].addEventListener("click", function(){
				squareListener(this,length);
			});
		}
		else{
			squares[i].style.backgroundColor="#232323";
		}
	}
	heading.style.backgroundColor="steelblue";
	message.textContent="";
	restart.textContent="Restart Game";
});

hard.addEventListener("click", function(){
	this.classList.add("selected");
	easy.classList.remove("selected");
	numofsq=6;
	colors = generateColors(numofsq);
	pickedColor = pickColor(colors,numofsq);
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<numofsq; i++){
		squares[i].style.backgroundColor=colors[i];
	}
	heading.style.backgroundColor="steelblue";
	message.textContent="";
	restart.textContent="Restart Game";
});

function pickColor(arr,length) {
	return arr[ Math.floor( Math.random()*length ) ];
}

function generateColors(length){
	var colors = new Array(length);
	for(var i=0; i<length ; i++){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		colors[i]="rgb("+ r +", "+ g +", "+ b +")";
	}
	return colors;
}

function squareListener(obj,length){

	var clickedColor = obj.style.backgroundColor;
	
	if(clickedColor === pickedColor){

		for(var j=0; j<numofsq; j++){
			squares[j].style.backgroundColor=obj.style.backgroundColor;
		}

		messageDisplay.textContent = "You Guessed it right!!!";
		restart.innerHTML = "<button>Restart Game</button>";
		heading.style.backgroundColor=obj.style.backgroundColor;
		restart.textContent="Play Again";

	}
	else{
		obj.style.backgroundColor="#232323";
		messageDisplay.textContent="Try Again";
	}

}
