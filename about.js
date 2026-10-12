/* =========================
   ABOUT SCRAPBOOK
   ========================= */

const totalImages = 25;
const imageFolder = "images/about/";
const stackSize = 8;

const scrapbook = document.getElementById("scrapbook-stack");


// Keep track of images that haven't been used yet
let availableImages = [];


// Keep track of how many photos are currently in the stack
let photosInStack = 0;


// Create a shuffled list of all 25 images
function resetImages() {

    availableImages = [];

    for (let i = 1; i <= totalImages; i++) {
        availableImages.push(i);
    }

    // Shuffle the images randomly
    availableImages.sort(() => Math.random() - 0.5);
}


// Start with all 25 images available
resetImages();


// Add one photo to the scrapbook
function addPhoto() {

    // If all 25 images have been used,
    // create a new shuffled selection
    if (availableImages.length === 0) {
        resetImages();
    }


    // Take the next random image
    const imageNumber = availableImages.pop();


    // Create the photo container
    const photo = document.createElement("div");

    photo.classList.add("scrapbook-photo");


    // Create the image
    const image = document.createElement("img");

    image.src = `${imageFolder}about${imageNumber}.jpeg`;

    image.alt = "";


    // Random rotation between -7 and +7 degrees
    const rotation = Math.random() * 14 - 7;


    // Slight random movement
    const xOffset = Math.random() * 30 - 15;
    const yOffset = Math.random() * 30 - 15;


    // Apply the random position and rotation
    photo.style.transform =
        `translate(${xOffset}px, ${yOffset}px) rotate(${rotation}deg)`;


    // Add image inside the photo
    photo.appendChild(image);


    // Add photo to the stack
    scrapbook.appendChild(photo);

    photosInStack++;
}


// Show the next photo
function showNextPhoto() {

    // If eight photos are already visible,
    // clear the stack first
    if (photosInStack === stackSize) {

        scrapbook.innerHTML = "";

        photosInStack = 0;

        // Wait 1 seconds before starting the next stack
        setTimeout(showNextPhoto, 1000);

        return;
    }


    // Add the next photo
    addPhoto();


    // Wait 1 seconds before adding the next one
    setTimeout(showNextPhoto, 1000);
}


// Start the scrapbook
showNextPhoto();