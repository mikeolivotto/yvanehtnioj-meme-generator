function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  
  function drawBackgroundImage(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const img = document.getElementById('salt-bae');  
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }
  
  function getRandomImageSize(min, max, width, height) {
    const ratio = width / height;  // Used for aspect ratio
    width = getRandomInt(min, max);
    height = width / ratio;  
    return { width, height };
  }
  
  function drawSalt(src, canvas, ctx) {
    // Create an image object. (Not part of the dom)
    const image = new Image();
    image.src = src;
    
    // After the image has loaded, draw it to the canvas
     image.onload = function() {
      for (let i = 0; i < 8; i++) {
        const randomX = getRandomInt(10, canvas.width/2);
        const randomY = getRandomInt(canvas.height-300, canvas.height);
        const dimensions = getRandomImageSize(20, 100, image.width, image.height);
        ctx.drawImage(image, randomX, randomY, dimensions.width, dimensions.height);
      }
    }
    return image;
  }
  
  onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    drawBackgroundImage(canvas, ctx);
    const saltImage = drawSalt('http://res.cloudinary.com/dlwnmz6lr/image/upload/v1526005050/chadwick-boseman-inspired-workout-program-wide_phczey.webp', canvas, ctx);
  };