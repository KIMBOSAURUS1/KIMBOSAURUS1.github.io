console.log("good morning");

let theChair = document.getElementById("chair");
let theButtonText = document.querySelector("h2");

// telling it what to do
document.addEventListener('click', theMassage);

// doing stuff
function theMassage() {
	console.log("relaxxxx");
	document.getElementById("myPic").src = "https://media.timeout.com/images/105680295/image.jpg";
	// theButtonText.textContent = "Wow";
}