let start = null;

let lowerLimitPixelWidth = 0;
let upperLimitPixelWidth = 300;

let lowerWidthPercentage= 0;
let upperWidthPercentage= 100;

let defaultWidthOfForegroundImage = 50;

let picturesContainerData = document.getElementsByClassName('picture-curtain')[0].getClientRects()[0];

const picturesContainerLeft = picturesContainerData.left;
const picturesContainerRight = picturesContainerData.right;
const picturesContainerWidth = picturesContainerLeft - picturesContainerRight;

let foregroundPicture = document.getElementsByClassName('foreground-picture-container')[0];
console.log(picturesContainerData);

function curtainEffect(timestamp, foregroundPictureWidth) {
  foregroundPictureWidth = foregroundPictureWidth / 3;
  foregroundPicture.style.width = foregroundPictureWidth + '%';
}

function curtainEffectHandler(e) {
  window.requestAnimationFrame((timestamp) => {
    curtainEffect(timestamp, e.pageX - picturesContainerLeft);
  });
}


/*
janky effect implementation
---------------------------

let start = null;
let lowerLimitPixelWidth = 0;
let upperLimitPixelWidth = 300;
let upperWidthPercentage= 100;
let lowerWidthPercentage= 100;
let newWidthOfForegroundImage = 50;

let picturesContainerData = document.getElementsByClassName('picture-curtain')[0].getClientRects()[0];
let foregroundPicture = document.getElementsByClassName('foreground-picture-container')[0];
console.log(picturesContainerData);

function curtainEffect(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;

  if (newWidthOfForegroundImage <= lowerLimit) newWidthOfForegroundImage = lowerLimit;
  if (newWidthOfForegroundImage >= upperLimit) newWidthOfForegroundImage = upperLimit;

  newWidthOfForegroundImage = (newWidthOfForegroundImage - 184)/2.76;

  if (newWidthOfForegroundImage === upperWidthPercentage) return; // bad hack
  if (newWidthOfForegroundImage >= 98) newWidthOfForegroundImage = upperWidthPercentage; // bad hack

  foregroundPicture.style.width = newWidthOfForegroundImage + '%';

  if (progress < 400) {
    window.requestAnimationFrame(curtainEffect);
  }
}

function sliderEffectHandler (e) {
  newWidthOfForegroundImage = e.pageX - picturesContainerData.left;
  console.log(`e.pageX: ${e.pageX}`);
  console.log(`picturesContainerData.left: ${picturesContainerData.left}`);
  console.log(`newWidthOfForegroundImage: ${newWidthOfForegroundImage}`);
  console.log(`---------------------`);

  if (newWidthOfForegroundImage <= lowerLimit) newWidthOfForegroundImage = lowerLimit;
  if (newWidthOfForegroundImage >= upperLimit) newWidthOfForegroundImage = upperLimit;

  window.requestAnimationFrame(curtainEffect);
}
*/