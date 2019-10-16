

let curtainContainer = document.getElementsByClassName('curtain-container')[0].getClientRects()[0];

const leftBoundary = curtainContainer.left;

let foregroundContainer = document.getElementsByClassName('foreground-image-container')[0];

let newWidth = '40%';

let callBack = () => {
  newWidth = newWidth + "%";
  foregroundContainer.style.width = newWidth;
  console.log('newWidth')
}

let mouseMoveHandler = (e) => {

  newWidth = e.offsetX;
  foregroundContainer.style.width = newWidth;
  window.requestAnimationFrame(callBack);

}