function setUpEvents(){

    const gridContainer = document.getElementById('gridContainer');
    const specialBtn = document.getElementById('special');
    const eraseBtn = document.getElementById('erase');
    const resetBtn = document.getElementById('reset');
    let slider = document.getElementById('resize');
    let defaultColor = ('black');

    function makeGrid(gridNum) {
        let gridArea = gridNum*gridNum;
        for (i = 0; i <= gridArea; i++) {
            let gridItem = document.createElement('div');
            gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
            gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
            gridContainer.appendChild(cellDiv).className='gridDiv';
        }
    };

    }
window.onload = function(){
    setUpEvents();
};