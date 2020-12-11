'use strict';

console.log("\nЗадание №1\nСписок простых числе от 0 до 100:");

let x = 2;
while (x <= 100){
    if (primeNumber(x)) console.log(x);
    x++;
}

function primeNumber(n){
    let x = 2;
    while (x < n){
        if (n % x === 0) return false;
        x++;
    }
    return true;
}