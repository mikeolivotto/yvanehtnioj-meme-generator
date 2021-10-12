// setup the canvas and context
const canvas = document.getElementById("meme-image");
const ctx = canvas.getContext("2d");

const image = new Image();

window.onload = function () {
  // setup image and set its ratio
  image.src = "./img/yvanehtnioj.jpeg";

  image.onload = function () {
    canvas.width =
      image.width > window.innerWidth ? window.innerWidth * 0.95 : image.width;
    const imageRatio = image.height / image.width;
    canvas.height = canvas.width * imageRatio;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    listenForKeyUp();
  };
};

// get user input
const userInput = document.getElementById("user-input");
var userText = "";

const listenForKeyUp = () => {
  userInput.addEventListener("keyup", (evt) => {
    // redraw the image with each keystroke
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    // reverse the user's text
    userText = userInput.value.split("").reverse().join("");

    writeToCanvas();
  });
};

const writeToCanvas = () => {
  // need to calculate the percentage the canvas resizes for smaller devices
  const sizeReducer =
    image.width > window.innerWidth
      ? (window.innerWidth * 0.95) / image.width
      : 1;
  // reduce the font size when resized
  let fontSize = 40 * sizeReducer;
  // adjust the offset when resized
  let shadowOffset = 3 * sizeReducer;
  ctx.font = `${fontSize}px Arial`;
  ctx.textAlign = "center";
  ctx.fillStyle = "black";
  ctx.fillText(
    userText.toUpperCase(),
    canvas.width / 2 + shadowOffset,
    canvas.height * 0.87 + shadowOffset
  );

  ctx.fillStyle = "white";
  ctx.fillText(userText.toUpperCase(), canvas.width / 2, canvas.height * 0.87);
};

// Download image by clicking button
download = document.getElementById("download");
download.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "subliminal-meme.png";
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
});
