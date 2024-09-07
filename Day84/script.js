const block = document.getElementById('block');
let blockSize = 50;
let posX = window.innerWidth / 2 - blockSize / 2;
let posY = window.innerHeight / 2 - blockSize / 2;

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === 'ArrowUp' && posY > 0) {
        posY -= 10;
    } else if (key === 'ArrowDown' && posY < window.innerHeight - blockSize) {
        posY += 10;
    } else if (key === 'ArrowLeft' && posX > 0) {
        posX -= 10;
    } else if (key === 'ArrowRight' && posX < window.innerWidth - blockSize) {
        posX += 10;
    }
    block.style.top = posY + 'px';
    block.style.left = posX + 'px';
});
