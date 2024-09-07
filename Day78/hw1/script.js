let parentElement = document.getElementById("parent");
let childNodes = parentElement.childNodes;

childNodes.forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) { 
        node.textContent = "New Words";
    }
});



let list = document.getElementById("myList");
let nodes = list.childNodes;

nodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) { 
        node.textContent = "New Text";
    }
});