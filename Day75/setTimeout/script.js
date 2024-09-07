setTimeout(function() {
    alert("Hello!");
}, 2000);

function countdown(seconds) {
    if (seconds > 0) {
        console.log(seconds);
        setTimeout(function() {
            countdown(seconds - 1);
        }, 1000);
    }
}
countdown(5);

function showSuccessMessage() {
    var div = document.createElement('div');
    div.textContent = "Success!";
    div.style.position = "fixed";
    div.style.bottom = "10px";
    div.style.right = "10px";
    div.style.backgroundColor = "green";
    div.style.color = "white";
    div.style.padding = "10px";
    document.body.appendChild(div);

    setTimeout(function() {
        document.body.removeChild(div);
    }, 5000);
}
showSuccessMessage();
