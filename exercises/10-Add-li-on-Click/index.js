let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let newLi = document.createElement("li");

    
    newLi.innerText = "Forth elemnt";

    
    let list = document.querySelector("#myList");

    
    list.appendChild(newLi);

});
