function updateDisplay() {
    const divElement = document.getElementById("div");
    const paragraphElement = document.getElementById("p1");
    const colorValue = document.getElementById("color").value;
    const widthValue = document.getElementById("width").value;
    const heightValue = document.getElementById("height").value;
    const textValue = document.getElementById("text").value;

    divElement.style.backgroundColor = colorValue;
    divElement.style.width = widthValue + "px";
    divElement.style.height = heightValue + "px";
    paragraphElement.textContent = textValue;
}
