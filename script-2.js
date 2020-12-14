'use strict';

console.log('Задание №2');

let basket = {
    products: [],

    addProduct: function(id, name, price) {
        const p = {
            id: id,
            name: name,
            price: price,
        }
        this.products.push(p);
        console.log(`В корзину добавлен: ${this.productStringToShow(p)}`);
    },

    deleteProduct: function (id) {
        let p = this.products.find(item => item.id == id);
        let n = this.products.indexOf(p, 0);
        this.products.splice(n, 1);
        console.log(`Из корзины удален: ${this.productStringToShow(p)}`);
    },

    showProducts: function() {
        console.log('------------------\nТовары в корзине:\n')
        for (let p of this.products) {
            console.log(this.productStringToShow(p));
        }
        console.log(`Итого: ${this.sum()} руб.\n------------------`);
    },

    sum: function() {
        let sum = 0;
        for (let p of this.products) {
            sum += p.price;
        }
        return sum;
    },

    productStringToShow: function(p) {
        return `#${p.id}. ${p.name} - ${p.price} руб.`;
    },
};

basket.addProduct(0, "Стул", 150);
basket.addProduct(1, "Диван", 1700);
basket.addProduct(2, "Кресло", 275);
basket.addProduct(3, "Кровать", 415);
basket.showProducts();

basket.deleteProduct(2);
basket.showProducts();