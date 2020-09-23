var numSquares =6;
var colors = generaterandomcolors(numSquares);

var squares=document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay= document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetButton= document.querySelector("#reset");
colorDisplay.textContent=pickedColor;
var message = document.querySelector("#message");
var easyBtn =document.querySelector("#easyBtn");
var hardBtn =document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors=generaterandomcolors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0;i<squares.length;i++)
		{ 

			if(colors[i]){
             squares[i].style.backgroundColor=colors[i];
			}


			else{
				squares[i].style.display ="none";
			}
		}

})


hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
       numSquares=6;
	colors=generaterandomcolors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0;i<squares.length;i++)
		{ 

		
             squares[i].style.backgroundColor=colors[i];
			


			
				squares[i].style.display ="block";
			
		}
})

resetButton.addEventListener("click",function(){
colors = generaterandomcolors(numSquares);
pickedColor= pickColor();
colorDisplay.textContent= pickedColor;
this.textContent="New Colors";

message.textContent="";

for(var i=0;i<squares.length;i++)
{      
       squares[i].style.backgroundColor = colors[i];
    }

h1.style.backgroundColor = "steelblue";

})

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){

    var clickedColor=this.style.backgroundColor;

    if(clickedColor === pickedColor)
    {
              message.textContent=" Correct ";
         	changeColors(clickedColor);
         	h1.style.backgroundColor = clickedColor;
         	resetButton.textContent=" Play Again ?";


    }
   else
    	{  this.style.backgroundColor= "#232323" ; 
              message.textContent=" Try Again";
    	     }


	});
}


function changeColors(color){
	for(var i=0;i<colors.length;i++)
	{  squares[i].style.backgroundColor= color;}
}

function pickColor(){
  var random= Math.floor(Math.random() * colors.length);
  return colors[random];

}

function generaterandomcolors(num){
	var arr= [];



	for(var i=0;i<num;i++)
		{    
                        
			      

                   arr.push(randomcolors());

		     }
            return arr;


}


function randomcolors(){

var r=  Math.floor(Math.random() * 256); 
var g= Math.floor(Math.random() * 256); 
var b=  Math.floor(Math.random() * 256); 

return "rgb("+r+", "+g+", "+b+")" ;



}
