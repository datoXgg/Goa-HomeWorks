document.addEventListener('DOMContentLoaded', function() {
    const characters = [
        { name: "ირაკლი", description: "მეგობრების ლიდერი." },
        { name: "მარიკა", description: "მეგობარი, რომელიც ყოველთვის მართავს სიტუაციებს." },
    ];

    const charactersList = document.getElementById("characters-list");
    characters.forEach(character => {
        const li = document.createElement("li");
        li.textContent = `${character.name} - ${character.description}`;
        charactersList.appendChild(li);
    });
});

window.onload = function() {
    console.log("Welcome to the Georgian Cultural Journey!");
    
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        setTimeout(() => {
            feature.classList.add('fadeInAnimation');
        }, 200 * index); 
    });
};