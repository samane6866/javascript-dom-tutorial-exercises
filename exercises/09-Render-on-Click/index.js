let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	
let once= document.createElement("div")
	once.innerHTML="Hello world"
	once.style.backgroundColor="yellow"
	document.body.appendChild(once)
});