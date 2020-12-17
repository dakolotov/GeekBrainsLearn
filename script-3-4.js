'use strict';

let cart = {
    products: [],

    addProduct(name, price) {
        this.products.push({name: name, price: price});
    },

    sum(){
        let s = 0;
        for (let p of this.products) {
            s += p.price;
        }
        return s;
    },

    num(){
        return this.products.length;
    },

    total(){
        if (this.num() === 0){
            return 'Корзина пуста.';
        }else {
            return `В корзине: товаров ${this.num()} на сумму ${this.sum()} рублей.`;
        }
    },

    productList(){
        let list = '';
        for (let n in this.products) {
            list += `${+n + 1}. ${this.products[n].name} - ${this.products[n].price} руб.\n`
        }
        return list;        
    },

    showCart(){
        return this.productList() + '\n' + this.total();
    },
}

cart.addProduct('Стол', 100);
cart.addProduct('Стул', 50);
cart.addProduct('Диван', 500);

document.querySelector('#cart').textContent += cart.showCart();