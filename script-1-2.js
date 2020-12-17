'use strict';

let board = [
    ['Л', 'К', 'С', 'Ф', 'Кр', 'С', 'К', 'Л'],
    ['п', 'п', 'п', 'п', 'п', 'п', 'п', 'п'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['п', 'п', 'п', 'п', 'п', 'п', 'п', 'п'],
    ['Л', 'К', 'С', 'Ф', 'Кр', 'С', 'К', 'Л'],
];

let tableBoard = document.createElement('table');

for (let x = 0; x < 9; x++) {
    let row = document.createElement('tr');

    for (let y = 0; y < 9; y++){
        let col = document.createElement('td');
    
        if (x === 8 && y > 0) {
            col.innerText = ' abcdefgh'[y];
        }

        if (y === 0 && x < 8) {
            col.innerText = 8 - x;
        }

        if (x >= 0 && x < 8 && y > 0){
            col.innerText = board[x][y-1];
            if ((x + y) % 2 === 0) {
                col.style.backgroundColor = "#ddd";
            }
        }

        row.appendChild(col);
    }
    tableBoard.appendChild(row);
}

document.body.insertAdjacentElement('afterbegin', tableBoard);