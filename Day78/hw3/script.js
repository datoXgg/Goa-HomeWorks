let box = document.getElementById("box");
let lastChild = box.lastChild;

if (lastChild.nodeType === Node.ELEMENT_NODE) {
    lastChild.textContent = "Last Child Words";
}



let wrapper = document.getElementById("wrapper");
let lastNode = wrapper.lastChild;

if (lastNode.nodeType === Node.TEXT_NODE) {
    lastNode.textContent = "Last Text Words";
}
