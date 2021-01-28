console.log('successfully linked!')

// For each prompt, perform the specified selection. Save the result to a variable, then console.log that variable. Confirm that it contains what it should in the console!

// 1) All img tags
const img = document.querySelectorAll("img");
console.log(img);
// 2) All section tags
const section = document.querySelectorAll("section");
console.log(section);
// 3) The element with an id of section-1
const section1 = document.querySelectorAll("section-1");
console.log(section1);
// 4) The element with an id of destinations-button
const destinationB = document.querySelectorAll("destination-button");
console.log(destinationB);
// 5) The first element with a class of images-rack
const imageRack = document.querySelectorAll("images-rack");
console.log(imageRack);

// 6) The first h1 tag
const h1 = document.querySelector("h1");
console.log(h1);
// 7) All elements with a class of image-card
const imageCard = document.querySelectorAll("image-card");
console.log(imageCard);
// 8) All elements with a class of over-image-text
const overImage = document.querySelectorAll("over-image-text");
console.log(overImage);

