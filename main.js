function setUpEvents(){

    const gridContainer = document.getElementById('gridContainer');
    const specialBtn = document.getElementById('special');
    const eraseBtn = document.getElementById('erase');
    const resetBtn = document.getElementById('reset');
    let slider = document.getElementById('resize');
    let gridNum = Number(slider.value);

    function makeGrid(gridNum) {
        let gridArea = (gridNum * gridNum);
        for (let i = 0; i<gridArea; i++) {
            let gridItem = document.createElement('div');
            gridItem.id=i;
            gridContainer.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
            gridContainer.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
            gridItem.classList.add('gridItem');
            gridContainer.appendChild(gridItem);
        }
    };
    makeGrid(gridNum);

    }
window.onload = function(){
    setUpEvents();
};