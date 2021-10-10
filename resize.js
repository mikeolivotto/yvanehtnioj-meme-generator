// setup image and set its ratio
const image = new Image();
image.src = "./img/yvanehtnioj.jpeg";
console.log("image width: "+image.width)
const imageRatio = image.height / image.width;
const screenWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;

// setup the canvas and context
const canvas = document.getElementById("meme-image");
const ctx = canvas.getContext("2d");
canvas.width = screenWidth
canvas.height = canvas.width * imageRatio


const listenForKeyUp = () => {
  userInput.addEventListener("keyup", (evt) => {
    ctx.drawImage(image, 0, 0, screenWidth, canvas.width * imageRatio);

  });
};

window.addEventListener("DOMContentLoaded", function () {
  image.onload = function () {
    // draw the image, scaled to the given screen width
    ctx.drawImage(image, 0, 0, screenWidth, canvas.width * imageRatio);

    listenForKeyUp();
  };
});
