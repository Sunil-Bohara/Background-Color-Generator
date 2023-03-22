const mainButton = document.querySelector(".container button");
const body = document.body;
const currentColor = document.querySelector(".container h1 span");

// Creating a function for generating random numbers. Will use this numbers to pass a rgb() value for color generation.
function backgroundColorGenerator(){
    const red = Math.round(Math.random() * 256);
    const green = Math.round(Math.random() * 256);
    const blue = Math.round(Math.random() * 256);

    const bodyBackgroundColor = `rgb(${red}, ${green}, ${blue})`;
    return bodyBackgroundColor;
}

mainButton.addEventListener("click", function(){
    const bodyBackgroundColor = backgroundColorGenerator(); 
    body.style.backgroundColor = bodyBackgroundColor;
    currentColor.textContent = bodyBackgroundColor;
})