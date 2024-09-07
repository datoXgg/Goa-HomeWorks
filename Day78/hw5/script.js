let currentElement = document.getElementById("current");
let nextSibling = currentElement.nextSibling;

if (nextSibling) {
    nextSibling.textContent = "Next Brother Words";
}



let listItem = document.getElementById("item");
let nextNode = listItem.nextSibling;

if (nextNode && nextNode.nodeType === Node.TEXT_NODE) {
    nextNode.textContent = "Next Text Brother";
}
