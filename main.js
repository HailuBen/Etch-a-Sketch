const gridContainer = document.getElementById("gridContainer");
const canvasButton = document.getElementById("popup");
let newCanvas;
let newCanvasSize;
let userNum;

function makeRows(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cellDiv = document.createElement("div");
        gridContainer.appendChild(cellDiv).className = "gridDiv";
    };
};

canvasButton.addEventListener("click", (e) => {
    newCanvas=e.target.id;
    newGrid();
})

function newGrid() {
    userNum = prompt('Please enter the new size of the canvas.\n(e.g. enter 4 = 4x4 square grid)\nMAX: 100');
    checkInput();
}

makeRows(16, 16);