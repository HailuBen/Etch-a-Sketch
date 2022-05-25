// let createDiv = document.createElement('div');
// createDiv.classList.add('gridDiv');
let createP = document.createElement('p');
createP.classList.add('gridDiv');
const container = document.getElementById("container");

// for (let i=1; i<33; i+=1){
//     createP.innerHTML+=i+'testing<br>';
//     document.querySelector('.grid-container').appendChild(createDiv);
//     document.querySelector('.grid-container').appendChild(createP);
// }

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (c = 0; c < (rows * cols); c++) {
        let cellDiv = document.createElement("div");
        cellDiv.innerText = (c + 1);
        container.appendChild(cellDiv).className = "gridDiv";
    };
};
    
makeRows(16, 16);