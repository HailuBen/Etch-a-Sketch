    const defaultGridSize = 16;
    let currentGridSize = defaultGridSize;
    const gridContainer = document.getElementById('gridContainer');
    const specialBtn = document.getElementById('special');
    const eraseBtn = document.getElementById('erase');
    const resetBtn = document.getElementById('reset');
    let slider = document.getElementById('resize');
    let displaySliderSize = document.getElementById('sliderSize');

    slider.onmousemove = (e) => displaySliderSize.innerHTML=(e.target.value)+' x '+(e.target.value)
    slider.onchange = (e) => resizeGrid(e.target.value)
    resetBtn.addEventListener('click', function(){
        resetGrid();
    })
    
    let mouseDown = false
    document.body.onmousedown = () => (mouseDown = true)
    document.body.onmouseup = () => (mouseDown = false)

    let setGridSize = (newGridSize) => currentGridSize = newGridSize;

    function makeGrid(gridSize) {
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

        for (let i = 0; i<gridSize*gridSize; i++) {
            let gridItem = document.createElement('div');
            gridItem.id=i;
            gridItem.classList.add('gridItem');
            gridItem.addEventListener('mouseover', draw)
            gridItem.addEventListener('mousedown', draw)
            gridContainer.appendChild(gridItem);
        }
    };

    function draw(e) {
        if (e.type === 'mouseover' && !mouseDown) return
        
    }

    // slider.addEventListener('beforeinput', function(){
    //     // if statement for if there is any art on grid first
    //     alert('WARNING: Your art will be lost if you resize.');
    // })
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