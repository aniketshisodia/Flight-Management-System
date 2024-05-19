const images = ["img1.jpg", "img2.jpg"]; // Array of image URLs
const interval = 3000; // Interval in milliseconds (2 seconds)

const ads = document.querySelector('.ads');

let index = 0;

function changeImage() {
  ads.src = images[index];
  index = (index + 1) % images.length; // Loop through images
}

setInterval(changeImage, interval);
