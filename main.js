function setUpEvents(){

    const gridContainer = document.getElementById('gridContainer');
    const resizeButton = document.getElementById('resize');
    let newGridNum = 32;

    function makeGrid(rows, cols) {
        gridContainer.style.setProperty('--grid-rows', rows);
        gridContainer.style.setProperty('--grid-cols', cols);
        for (c = 0; c < (rows * cols); c++) {
            let cellDiv = document.createElement('div');
            gridContainer.appendChild(cellDiv).className = 'gridDiv';
        };
    };

    resizeButton.addEventListener('click', (e)=> {
        newGrid();
    })

    function newGrid(rows, cols) {
        rols = newGridNum;
        cols = newGridNum;
        gridContainer.style.setProperty('--grid-rows', newGridNum);
        gridContainer.style.setProperty('--grid-cols', newGridNum);
        for (c = 0; c < (newGridNum * newGridNum); c++) {
            let cellDiv = document.createElement('div');
            gridContainer.appendChild(cellDiv).className = 'gridDiv';
        };
    };

    makeGrid(16, 16);
    }
window.onload = function(){
    setUpEvents();
};