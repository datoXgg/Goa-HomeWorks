let currentElement = document.getElementById("current");
let previousSibling = currentElement.previousSibling;

if (previousSibling) {
    previousSibling.textContent = "Previous Brother Words";
}



let listItem = document.getElementById("item");
let prevNode = listItem.previousSibling;

if (prevNode && prevNode.nodeType === Node.TEXT_NODE) {
    prevNode.textContent = "Previous Text Brother";
}
