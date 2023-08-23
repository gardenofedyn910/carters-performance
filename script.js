document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image img');
    const enlargedContainer = document.querySelector('.enlarged-img');
    const enlargedImage = enlargedContainer.querySelector('img');
    const closeBtn = document.querySelector('.close-btn');

    images.forEach(image => {
        image.addEventListener('click', () => {
            console.log("Image clicked!");
            console.log("Image source:", image.src);
            enlargedImage.src = image.src;
            console.log("Enlarged image source:", enlargedImage.src);
            enlargedContainer.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        enlargedContainer.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image img');
    const enlargedContainer = document.querySelector('.enlarged-img1');
    const enlargedImage = enlargedContainer.querySelector('img');
    const closeBtn = document.querySelector('.close-btn1');

    images.forEach(image => {
        image.addEventListener('click', () => {
            console.log("Image clicked!");
            console.log("Image source:", image.src);
            enlargedImage.src = image.src;
            console.log("Enlarged image source:", enlargedImage.src);
            enlargedContainer.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        enlargedContainer.style.display = 'none';
    });
});