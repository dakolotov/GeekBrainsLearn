//##########################################
//--- Задача 1 ---
//##########################################
console.log("--- Задача 1 ---")
let a = 1, b = 1, c, d;
c = ++a; console.log(c);           // 2
//Когда оператор "++" слева, то сначала происходит инкремент, потом присваивание.

d = b++; console.log(d);           // 1
//Когда оператор "++" справа, то сначала происходит присваивание, потом инкремент.

c = (2 + ++a); console.log(c);      // 5
d = (2 + b++); console.log(d);      // 4
//Переменные a и b были увеличены на 1, остальное произошло по принципу, указанному выше.

console.log(a);                    // 3
console.log(b);                    // 3
//Переменные a и b были увеличены еще раз на 1.


//##########################################
//--- Задача 2 ---
//##########################################
console.log("\n--- Задача 2 ---")
a = 2;
let x = 1 + (a *= 2);
console.log(x); // 5
// Переменная "a" была увеличена в два раза, после чего произошло сложение.


//##########################################
//--- Задача 3 ---
//##########################################
console.log("\n--- Задача 3 ---")
a = Math.round((Math.random() - 0.5) * 100);
b = Math.round((Math.random() - 0.5) * 100);
console.log("Заданы два числа:", a, "и", b)
abTransformation(a, b);

function abTransformation(a, b) {
    if (a > 0 && b > 0) {
        console.log("Оба числа положительные, разность (a - b) = ", a - b);
        return (a - b);
    }
    if (a < 0 && b < 0) {
        console.log("Оба числа отрицательные, произведение (a * b) = ", a * b);
        return a * b;
    }
    console.log("Числа с разными знаками, сумма (a + b) = ", a + b);
    return a + b;
}


//##########################################
//--- Задача 4 ---
//##########################################
console.log("\n--- Задача 4 ---")
let Task_N4 = Math.round(Math.random() * 15);
console.log("Список чисел от", Task_N4, "до", 15);

function selectCase(a) {
    switch (a) {
        case 0: return 0;
        case 1: return 1;
        case 2: return 2;
        case 3: return 3;
        case 4: return 4;
        case 5: return 5;
        case 6: return 6;
        case 7: return 7;
        case 8: return 8;
        case 9: return 9;
        case 10: return 10;
        case 11: return 11;
        case 12: return 12;
        case 13: return 13;
        case 14: return 14;
        case 15: return 15;
    }
}

function listNumber(a) {
    let out = "";
    for (let n = a; n <= 15; n++) {
        out += n + " ";
    }
    console.log(out);
}

listNumber(selectCase(Task_N4));


//##########################################
//--- Задача 5 ---
//##########################################
console.log("\n--- Задача 5 ---")
function sum(a, b) {
    return a + b;
}

function difference(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}
console.log("Сумма чисел:", a, "и", b, "равна", sum(a, b));
console.log("Разность чисел:", a, "и", b, "равна", difference(a, b));
console.log("Произведение чисел:", a, "и", b, "равно", multiplication(a, b));
console.log("Результат деления числа:", a, "на", b, "равен", division(a, b));


//##########################################
//--- Задача 6 ---
//##########################################
console.log("\n--- Задача 6 ---")
function mathOperation(arg1, arg2, operation) {
    switch (operation.toLowerCase()) {
        case "сложение": return sum(arg1, arg2);
        case "вычитание": return difference(arg1, arg2);
        case "умножение": return multiplication(arg1, arg2);
        case "деление": return division(arg1, arg2);
        default: return "неизвестная операция";
    }
}

console.log("Умножение 3 и 7:", mathOperation(3, 7, "Умножение"));
console.log("Вычитание 3 и 7:", mathOperation(3, 7, "Вычитание"));
console.log("Деление 3 и 7:", mathOperation(3, 7, "Деление"));
console.log("Сложение 3 и 7:", mathOperation(3, 7, "Сложение"));
console.log("Йцукен 3 и 7:", mathOperation(3, 7, "Йцукен"));


//##########################################
//--- Задача 7 ---
//##########################################
console.log("\n--- Задача 7 ---")
console.log("Если сравнить null и 0, то будет:", null === 0); //false
//"null" - это пустой указатель, "0" - значение.


//##########################################
//--- Задача 8 ---
//##########################################
console.log("\n--- Задача 8 ---")
function power(val, pow) {
    if (pow > 100 || pow < 0) {
        return "значение степени выходит за пределы расчета";
    }
    if (pow === 0) {
        return 1;
    }
    if (pow > 0) {
        return val * power(val, --pow);
    }
}

console.log(power(2, 10));