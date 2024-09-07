let container = document.getElementById("container");
let firstChild = container.firstChild;

if (firstChild.nodeType === Node.ELEMENT_NODE) {
    firstChild.textContent = "First Child Words";
}



let list = document.getElementById("list");
let firstNode = list.firstChild;

if (firstNode.nodeType === Node.TEXT_NODE) {
    firstNode.textContent = "First Text Words";
}
