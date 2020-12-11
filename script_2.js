'use strict';

let basket = [
    ['Мяч', 10],
    ['Стул', 14],
    ['Кровать', 145],
    ['Тележка', 25],
];

function countBasketPrice(basket) {
    let sum = 0;
    basket.forEach(element => {
        sum += +element[1];
    });
    return sum;
}

function showBasket(basket){
    for (let key in basket) {
        console.log(`${+key + 1}. ${basket[key][0]} - ${basket[key][1]} руб.`);
    }
}

console.log('\nЗадание №2\nВ вашей корзине:');
showBasket(basket);
console.log(`\nОбщая стоимость товаров: ${countBasketPrice(basket)} руб.`);