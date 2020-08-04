var fisrtColor = document.getElementById("color1");
var secondColor = document.getElementById("color2");
var body = document.getElementById("main_part");
var h3 = document.querySelector("h3");

fisrtColor.addEventListener("input", changecolor);

secondColor.addEventListener("input",changecolor);


function changecolor(){
	 body.style.background = 
	"linear-gradient(to right," 
	+ fisrtColor.value +"," 
	+ secondColor.value + ")";

	h3.textContent = body.style.background +";";

}


