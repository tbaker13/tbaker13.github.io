var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradient = document.getElementById("gradient")
var random = document.getElementById("random");

gradient.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

function generateRandomColors() {
    var randomNumbers = Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256);
    var randomColor = 'rgb(' + randomNumbers + ')';
    randomColor = randomColor.split("(")[1].split(")")[0];
    randomColor = randomColor.split(",");
    var hex = randomColor.map(function(getHex) {
        getHex = parseInt(getHex).toString(16);
        return (getHex.length==1) ? "0"+getHex : getHex;})
    hex = hex.join("");
    return "#" + hex;
}

function setRandomColors() {
    color1.value = generateRandomColors();
    color2.value = generateRandomColors();
    setGradient();
}

function setGradient() {
    gradient.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = gradient.style.background + ";";
}

setRandomColors();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", setRandomColors);