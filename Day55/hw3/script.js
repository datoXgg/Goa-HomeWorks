function displayText() {
    var text = document.getElementById("text").value;
    var color = document.getElementById("color").value;
    var displayParagraph = document.getElementById("par");
    displayParagraph.textContent = text;
    displayParagraph.style.color = color;
}