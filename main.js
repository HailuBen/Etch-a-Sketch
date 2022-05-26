function setUpEvents(){

const gridContainer = document.getElementById("gridContainer");

function makeRows(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cellDiv = document.createElement("div");
        gridContainer.appendChild(cellDiv).className = "gridDiv";
    };
};

function newGrid() {
    alert('Please enter the new size of the canvas.\n(e.g. enter 4 = 4x4 square grid)\nMAX: 100');
}

makeRows(16, 16);
}

window.onload = function(){
    setUpEvents();
};