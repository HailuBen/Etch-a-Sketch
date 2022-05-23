let createDiv = document.createElement('div');
let createP = document.createElement('p');

for (let i=1; i<17; i+=1){
    createP.innerHTML+=i+'testing<br>';
    document.querySelector('.container').appendChild(createDiv);
    document.querySelector('.container').appendChild(createP); 
}