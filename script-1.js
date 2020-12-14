'use strict';

console.log('Задание №1');

function splitter(num) {
    let numberSplit = {
        'единицы': null,
        'десятки': null,
        'сотни': null,
    };

    num = parseInt(num);

    if (isNaN(num)) {
        console.log(`Нужно ввести число.`);
        return null;
    }

    if (num < 0 || num > 999) {
        console.log(`Число "${num}" выходит за пределы диапазона: 0...999.`);
        return null;
    }
    
    numberSplit['сотни'] = Math.floor(num / 100);
    let deduction = numberSplit['сотни'] * 100;

    numberSplit['десятки'] = Math.floor((num - deduction) / 10);
    deduction += numberSplit['десятки'] * 10;

    numberSplit['единицы'] = num - deduction;

    return numberSplit;
}

let num = prompt('Введите число в диапазоне от 0 до 999:');
console.log(splitter(num));
console.log('\n');