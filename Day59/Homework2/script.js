function generateParagraph() {
    const text = prompt("Enter text for the paragraph:");
    const textColor = prompt("Enter text color (e.g., red, #00ff00):");
    const bgColor = prompt("Enter background color (e.g., blue, rgb(255, 200, 0)):");

    const paragraph = document.createElement('p');

    paragraph.textContent = text;

    paragraph.style.color = textColor;

    paragraph.style.backgroundColor = bgColor;

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
    
    outputDiv.appendChild(paragraph);
}
