

let picturesContainerData = document.getElementsByClassName('picture-curtain')[0].getClientRects()[0];

const picturesContainerLeft = picturesContainerData.left;

let foregroundPicture = document.getElementsByClassName('foreground-picture-container')[0];
console.log(picturesContainerData);

function curtainEffect(foregroundPictureWidth) {
  foregroundPictureWidth = foregroundPictureWidth / 5;
  foregroundPicture.style.width = foregroundPictureWidth + '%';
}

function curtainEffectHandler(e) {
  window.requestAnimationFrame(() => {
    curtainEffect(e.pageX - picturesContainerLeft);
  });
}



// janky effect implementation
// ---------------------------

// let newWidthOfForegroundImage = 30;

// let picturesContainerData = document.getElementsByClassName('picture-curtain')[0].getClientRects()[0];
// let foregroundPicture = document.getElementsByClassName('foreground-picture-container')[0];
// console.log(picturesContainerData);

// function curtainEffect() {
//   newWidthOfForegroundImage = newWidthOfForegroundImage/5;
//   foregroundPicture.style.width = newWidthOfForegroundImage + '%';
// }

// function curtainEffectHandler (e) {
//   newWidthOfForegroundImage = e.pageX - picturesContainerData.left;
//   console.log(`e.pageX: ${e.pageX}`);
//   console.log(`picturesContainerData.left: ${picturesContainerData.left}`);
//   console.log(`newWidthOfForegroundImage: ${newWidthOfForegroundImage}`);
//   console.log(`---------------------`);

//   window.requestAnimationFrame(curtainEffect);
// }