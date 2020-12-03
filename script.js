'use strict';

function celsiusToFahrenheit(tСelsius) {
    let tFahrenheit = (9 / 5) * tСelsius + 32;
    return tFahrenheit;
}

let tСelsius = prompt('Введите температуру по Цельсию:');
let tFahrenheit = celsiusToFahrenheit(tСelsius);

alert(tСelsius + ' по Цельсию = ' + tFahrenheit + ' по Фаренгейту');

let admin;
let name;

name = 'Василий';
admin = name;

console.log(admin);
console.log(1000 + "108");