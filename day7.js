let button = document.createElement("button");
button.innerText = "Click Me";
document.body.appendChild(button);

let messageDisplay = document.createElement("p");
messageDisplay.innerText = "Status: Not Clicked Yet";
document.body.appendChild(messageDisplay);

button.addEventListener("click", function() {
    messageDisplay.innerText = "Status: Button Clicked Successfully!";
    console.log("User interacted with the DOM element.");
});