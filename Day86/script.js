const photos = ['Images/image.png', 'Images/image2.png', 'Images/image3.png']; 
let currentIndex = 0;

const photoElement = document.getElementById('photo');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updatePhoto() {
    photoElement.src = photos[currentIndex];
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === photos.length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updatePhoto();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < photos.length - 1) {
        currentIndex++;
        updatePhoto();
    }
});

updatePhoto();
