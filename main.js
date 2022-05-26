function setUpEvents(){

    const gridContainer = document.getElementById("gridContainer");

    function makeGrid(rows, cols) {
        gridContainer.style.setProperty('--grid-rows', rows);
        gridContainer.style.setProperty('--grid-cols', cols);
        for (c = 0; c < (rows * cols); c++) {
            let cellDiv = document.createElement("div");
            gridContainer.appendChild(cellDiv).className = "gridDiv";
        };
    };


    makeGrid(16, 16);
    }
window.onload = function(){
    setUpEvents();
};