"use strict";

// Setup
const GRIDWIDTHPX = 960;
const form = () => document.forms.settings;

drawGrid(form().gridSizeInput.value);
setUpClearButton();
setUpGridSizeFormInput();

// FUNCTIONS
function drawGrid(number) {
  removeSquares();
  drawSquares(number);
  setContainerStyles(number);

  function drawSquares(number) {
    console.log('Drawing squares...');
    for (let i = 0; i < number**2; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      setHoverEffectFor(square);
      document.querySelector('.container').append(square);
    }

    function setHoverEffectFor(square) {
      square.addEventListener('mouseover', (e) => {
        square.classList.add('hover');
      });
    }
  }

  function removeSquares() {
    removeChildElementsOf(document.querySelector('.container'));
  }

  function setContainerStyles(number) {
    const container = document.querySelector('.container');
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  }

}

function setUpClearButton() {
  document.querySelector('#btn-clear').addEventListener('click', () => {
    removeClassFromSquares('hover');
  });
}

function setUpGridSizeFormInput() {
  form().gridSizeInput.oninput = (event) => {
    drawGrid(event.target.value);
  }
}

// HELPER FUNCTIONS
function addClassToSquares(className) {
  squares().forEach((square) => {
    square.classList.add(className)
  });
}

function removeClassFromSquares(className) {
  squares().forEach((square) => {
    square.classList.remove(className)
  });
}

function squares() {
  return document.querySelectorAll('.square');
}

function removeChildElementsOf(parentElement) {
  while (parentElement.lastElementChild) {
    parentElement.removeChild(parentElement.lastElementChild);
  }
}
