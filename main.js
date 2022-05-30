    const defaultGridSize = 16;
    let currentGridSize = defaultGridSize;
    const gridContainer = document.getElementById('gridContainer');
    const specialBtn = document.getElementById('special');
    const eraseBtn = document.getElementById('erase');
    const resetBtn = document.getElementById('reset');
    let slider = document.getElementById('resize');
    let displaySliderSize = document.getElementById('sliderSize');
    let gridItem;

    slider.onmousemove = (e) => displaySliderSize.innerHTML=(e.target.value)+' x '+(e.target.value)
    slider.onchange = (e) => resizeGrid(e.target.value)
    resetBtn.addEventListener('click', function(){
        resetGrid();
    })
    
    let setGridSize = (newGridSize) => currentGridSize = newGridSize;

    function makeGrid(gridSize) {
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        for (let i = 0; i<gridSize*gridSize; i++) {
            gridItem = document.createElement('div');
            gridItem.id=i;
            gridItem.classList.add('gridItem');
            gridContainer.appendChild(gridItem);
        }   
    };

    function resizeGrid(value){
        setGridSize(value);
        resetGrid();
    }
    function resetGrid(){
        gridContainer.innerHTML= '';
        makeGrid(currentGridSize);
    }

window.onload = function(){
    makeGrid(defaultGridSize);
};