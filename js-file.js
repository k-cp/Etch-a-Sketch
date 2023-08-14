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
        box.style.backgroundColor = "orange";
        box.style.border = 'solid black';
        box.style.minBlockSize = `${parseInt(div.style.height)/16}px`;
        box.style.boxSizing = 'border-box';
        box.style.flex = '1';
        box.classList.add('box');
        row.appendChild(box);
    }
    div.appendChild(row);
}

const box = document.querySelectorAll('.box');
