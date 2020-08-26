// Setup
const btnClear = document.querySelector('#btn-clear')
const container = document.querySelector('.container');
const GRIDWIDTHPX = 960;

drawSquares(128);

function drawSquares(number) {
  setContainerGrid(number);

  for (let i = 0; i < number**2; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
  }

  function setContainerGrid(number) {
    // 960px = (14 + 1) * 64;
    const squareSizePx = (GRIDWIDTHPX / number) - 1;
    const gridGapPx = 1;
    const gridTemplate = `repeat(${number}, ${squareSizePx}px)`;

    // container.style[width] = GRIDWIDTHPX;
    container.style.gridTemplateRows = gridTemplate;
    container.style.gridTemplateColumns = gridTemplate;
    container.style.gridRowGap = gridGapPx;
    container.style.gridColumnGap = gridGapPx;
  }
}

const squares = document.querySelectorAll('.square');

// Hover effect
squares.forEach((square) => {
  square.addEventListener('mouseover', (e) => {
    square.classList.add('hover');
  })
});

// Clear button
btnClear.addEventListener('click', () => removeClassFromSquares('hover'));

// Helper functions
function addClassToSquares(className) {
  squares.forEach((square) => {
    square.classList.add(className)
  });
}

function removeClassFromSquares(className) {
  squares.forEach((square) => {
    square.classList.remove(className)
  });
}
