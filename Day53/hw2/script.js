function minus() {
    const p = document.getElementById("p1");
    let currentValue = parseInt(p.textContent); 
    currentValue--; 
    p.textContent = currentValue; 
}

function plus() {
    const p = document.getElementById("p1");
    let currentValue = parseInt(p.textContent); 
    currentValue++; 
    p.textContent = currentValue; 
}

function reset(){
    p1.textContent = 0
}