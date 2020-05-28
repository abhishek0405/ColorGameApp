window.setTimeout(function(){
var colorbutton = document.querySelector("#play");
var colors=generatecolors(6);
var pick=document.querySelector("#pick");
var r = random();
var ans=colors[r];
var msg = document.querySelector("#message")
pick.textContent=ans;
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var sq=document.querySelectorAll(".square");
var total=6;

easy.addEventListener("click",function(){
	hard.classList.remove('btn-danger');
	easy.classList.add('btn-danger')
	total=3;
	msg.textContent="START";
	colorbutton.textContent="NewColors";
	heading.style.backgroundColor="rgb(72, 86, 255)";
	colors = generatecolors(total);
	r = random();
	ans = colors[r];
	pick.textContent=ans;
	for(var i=3;i<sq.length;i++){
		sq[i].style.backgroundColor="black";
	}
	
	for(var i=0;i<colors.length;i++){
	sq[i].style.backgroundColor=colors[i];}
});

hard.addEventListener("click",function(){
	easy.classList.remove('btn-danger');
	hard.classList.add('btn-danger')
	total=6;
	msg.textContent="START";
	colorbutton.textContent="NewColors";
	heading.style.backgroundColor="rgb(72, 86, 255)";
	colors = generatecolors(total);
	r = random();
	ans = colors[r];
	pick.textContent=ans;
	for(var i=3;i<sq.length;i++){
		sq[i].style.backgroundColor="black";
	}
	
	for(var i=0;i<colors.length;i++){
	sq[i].style.backgroundColor=colors[i];}
});





heading = document.querySelector("#heading");

colorbutton.addEventListener("click",function()

{	msg.textContent="START"; 
	colorbutton.textContent="NewColors";
	heading.style.backgroundColor="rgb(72, 86, 255)";
	 colors = generatecolors(total);
	 r = random();
	 ans = colors[r];
	 pick.textContent=ans;
	for(var i=0;i<sq.length;i++){
	sq[i].style.backgroundColor=colors[i];}

})



for(var i=0;i<total;i++){
	sq[i].style.backgroundColor=colors[i];
	sq[i].addEventListener("click",function(){
		var color=this.style.backgroundColor;
		if(color==ans){
			msg.textContent = "Correct";
			colorbutton.textContent="PlayAgain?"
			changecolor();

		}
		else{
			msg.textContent = "Try Again";
			this.style.backgroundColor="black";
		}
	});
}
function changecolor(){
	for(var i=0;i<total;i++){
		sq[i].style.backgroundColor = ans;
		heading.style.backgroundColor = ans;


	}
}

function random(){
	var rand = Math.floor(Math.random()*colors.length);
	return rand;
}

},50);

function generatecolors(n){
	var colors=[];
	for(var i=0;i<n;i++){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		colors.push("rgb"+"("+r+", "+g+", "+b+")");
	}
	console.log(colors);

	return colors;
}
