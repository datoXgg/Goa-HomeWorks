const colorValue = document.getElementById("color");
const addItemIcon = document.getElementById("addItemIcon");
const mainContainer = document.getElementsByClassName("main-box-container")[0];
const boxesArray = []; 

const HD = atob("MDcvMDUvMjAxMA==");

addItemIcon.addEventListener("click", handleAdd);

let newX = 0, newY = 0, oldY = 0, oldX = 0;
let isDragging = false;
let currentBoxIndex = -1;

function handleAdd() {
    let newBox = document.createElement("div");
    newBox.classList.add("box-container");
    newBox.innerHTML = `
    <form class="box-bar">
        <div class="box-bar"> 
            <span id="x">&#x2718;</span>
            <input type="color" id="textColorPicker" title="Change text color">
            <input type="color" id="borderColorPicker" title="Change border color">
        </div>
        <textarea name="ta" id="ta" placeholder="Enter text..."></textarea>
    </form>
    `;

    const boxBar = newBox.querySelector(".box-bar");
    const exitElement = newBox.querySelector("#x");
    const txtArea = newBox.querySelector("#ta");
    const textColorPicker = newBox.querySelector("#textColorPicker");
    const borderColorPicker = newBox.querySelector("#borderColorPicker");

    newBox.style.background = colorValue.value;

    mainContainer.appendChild(newBox);
    boxesArray.push(newBox); 

    exitElement.addEventListener("click", handleRemove);

    textColorPicker.addEventListener("input", () => {
        txtArea.style.color = textColorPicker.value;
    });

    borderColorPicker.addEventListener("input", () => {
        newBox.style.borderColor = borderColorPicker.value;
    });

    boxBar.addEventListener("mousedown", handleMouseDown);
    txtArea.addEventListener("mousedown", (e) => e.stopPropagation());
}

function handleRemove(event) {
    const boxToRemove = event.target.closest(".box-container");
    const index = boxesArray.indexOf(boxToRemove);
    if (index > -1) {
        boxesArray.splice(index, 1); 
    }
    boxToRemove.remove();
}

function handleMouseDown(e) {
    e.preventDefault();
    isDragging = true;
    const boxContainer = e.target.closest(".box-container");
    oldX = e.clientX;
    oldY = e.clientY;
    currentBoxIndex = boxesArray.indexOf(boxContainer); 

    function handleMove(e) {
        if (!isDragging) return;

        newY = oldY - e.clientY;
        newX = oldX - e.clientX;
        boxContainer.style.top = (boxContainer.getBoundingClientRect().top - newY) + "px";
        boxContainer.style.left = (boxContainer.getBoundingClientRect().left - newX) + "px";
        oldX = e.clientX;
        oldY = e.clientY;
    }

    function handleMouseUp() {
        isDragging = false;
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseup", handleMouseUp);
    }

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleMouseUp);
}

document.addEventListener("keydown", (e) => {
    if (currentBoxIndex === -1) return; 

    const currentBox = boxesArray[currentBoxIndex];
    const txtArea = currentBox.querySelector("#ta");
    const borderColorPicker = currentBox.querySelector("#borderColorPicker");
    const textColorPicker = currentBox.querySelector("#textColorPicker");

    switch (e.key) {
        case "ArrowUp":
            txtArea.style.color = textColorPicker.value;
            break;
        case "ArrowDown":
            currentBox.style.borderColor = borderColorPicker.value;
            break;
        case "ArrowLeft":
            currentBoxIndex = (currentBoxIndex > 0) ? currentBoxIndex - 1 : boxesArray.length - 1; 
            break;
        case "ArrowRight":
            currentBoxIndex = (currentBoxIndex < boxesArray.length - 1) ? currentBoxIndex + 1 : 0; 
            break;
    }
});
