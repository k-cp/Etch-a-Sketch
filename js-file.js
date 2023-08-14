const div = document.querySelector('.container')
div.style.height = '640px';
div.style.width = '640px';

for (let i = 0; i < 16; i++) {
    //create row div
    const row = document.createElement('div');
    row.classList.add('row');
    //create 16div inside row div
    for (let j = 0; j < 16; j++) {
        const box = document.createElement('div');
        box.style.border = 'solid black';
        box.style.minBlockSize = `${parseInt(div.style.height)/16}px`;
        box.style.boxSizing = 'border-box';
        box.style.flex = '1';
        box.classList.add('box');
        row.appendChild(box);
    }
    div.appendChild(row);
}
let boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener('mouseover', changeColor));
let clear = document.querySelector('#clear');
clear.addEventListener('click', clearColor);

const output = document.querySelector('#output');
const slider = document.querySelector('.slider');
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    clearBox(".container");
    for (let i = 0; i < this.value; i++) {
        //create row div
        const row = document.createElement('div');
        row.classList.add('row');
        //create 16div inside row div
        for (let j = 0; j < this.value; j++) {
            const box = document.createElement('div');
            box.style.border = 'solid black';
            box.style.minBlockSize = `${parseInt(div.style.height)/this.value}px`;
            box.style.boxSizing = 'border-box';
            box.style.flex = '1';
            box.classList.add('box');
            row.appendChild(box);
        }
        div.appendChild(row);
    }
    boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('mouseover', changeColor))
    clear.addEventListener('click', clearColor);

  }

function changeColor(e) {
    const selected = e.target;
    selected.style.backgroundColor = 'red';
}

function clearColor() {
    boxes.forEach(function (box) {
        const selected = box;
        selected.style.backgroundColor = 'white';
    })
}

function clearBox(elementClass)
{
    document.querySelector(`${elementClass}`).innerHTML = "";
}