let section = document.getElementById("section");

if (section.hasChildNodes()) {
    console.log("Section has childs");
} else {
    console.log("Section no childs");
}



let div = document.getElementById("div");

if (div.hasChildNodes()) {
    div.firstChild.textContent = "Div has childs";
} else {
    console.log("Div no childs");
}
