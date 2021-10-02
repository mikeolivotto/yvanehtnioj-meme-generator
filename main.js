/*
  NOTES:
  1. Upon window loading, setup the canvas (set size, draw base image)
  2. Listen for a Key up (ie. once the value in the input updates)
  3. Reset the canvas to the base image, then add the value of the input
      Base image must be reset, else each new keyup draws another word to 
      the canvas eg "T", "TE", "TES", "TEST" all over the top of each other
  */

let canvas = document.getElementById("meme-image");
let ctx = canvas.getContext("2d");
let userInput = document.getElementById("user-input");
let image = new Image();
image.src = "./yvanehtnioj.jpeg";
var userText = "";

const listenForKeyUp = () => {
  userInput.addEventListener("keyup", (evt) => {
    // redraw the image with each keystroke
    ctx.drawImage(image, 0, 0);
    // reverse the user's text
    userText = userInput.value.split("").reverse().join("");
    console.log(userText);

    writeToCanvas();
  });
};

const writeToCanvas = () => {
  ctx.font = "40px Arial";
  ctx.textAlign = "center";
  ctx.fillStyle = "black";
  ctx.fillText(
    userText.toUpperCase(),
    canvas.width / 2 + 3,
    canvas.height * 0.87 + 3
  );

  ctx.fillStyle = "white";
  ctx.fillText(userText.toUpperCase(), canvas.width / 2, canvas.height * 0.87);
};

window.addEventListener("DOMContentLoaded", function () {
  image.onload = function () {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);

    listenForKeyUp();
  };
});

// Download image by clicking button
download = document.getElementById("download");
download.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "subliminal-meme.png";
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
});
