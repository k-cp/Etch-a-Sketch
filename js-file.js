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
    boxes.forEach(box => box.addEventListener('mouseover', changeColor));
    clear.addEventListener('click', clearColor);

  }

function changeColor(e) {
    const selected = e.target;
    const color = darker_rgb(selected.style.backgroundColor);
    selected.style.backgroundColor = `${color}`;
}

function clearColor() {
    boxes.forEach(function (box) {
        const selected = box;
        selected.style.backgroundColor = 'white';
    })
    boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('mouseover', changeColor));
}

function clearBox(elementClass)
{
    document.querySelector(`${elementClass}`).innerHTML = "";
}

function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

function darker_rgb(former) {
    if (!former == true || former == 'white') {
        return random_rgb()
    }
    const values = extractRGBValues(former);
    return `rgb(${values['red']-values['red']/8}, ${values["red"]-values["red"]/8}, ${values["red"]-values["red"]/8})`
}

function extractRGBValues(rgbString) {
    const match = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    
    if (match) {
        const red = parseInt(match[1]);
        const green = parseInt(match[2]);
        const blue = parseInt(match[3]);
        return { red, green, blue };
    } else {
        return null; // RGB format doesn't match
    }
}