// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a,b) {
    return a * b;
}
console.log(rectangle(15, 46));

// const rectangle = (a, b) => a * b;
// console.log(rectangle(15, 46));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
let numberPi = 3.14;
function circle(numberPi, r) {
    return numberPi * Math.pow(r, 2);
}
console.log(circle(numberPi, 20));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(h, r) {
    return 2 * 3.14 * r * (h + r);
}
console.log(cylinder(3, 8));


// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'max', age: 31, status: true}
];
function arrayPrinter(array) {
    for (const item of array) {
        console.log(item);
    }
}
arrayPrinter(users);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function task_5(text) {
    document.write(`<p>${text}</p>`);
}
task_5(`arbitrary text`);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function task_6(text) {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}
task_6(`arbitrary text`);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function task_7(text, counter) {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
task_7(`arbitrary text`, 10);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let user = [25, 'Edik', true];
function task_8(array) {
    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
task_8(user);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let people = [
    {
        id: 25022000,
        name: 'Edik',
        age: 22
    },
    
    {
        id: 12122002,
        name: 'Olia',
        age: 19,
    },
    {
        id: 30220988,
        name: 'Oleg',
        age: 35,
    }
];
function task_9(array) {
    for (const item of array) {
        document.write(`<div>${item.id}**${item.name}**${item.age}</div>`);
    }
}
task_9(people);


// - створити функцію яка повертає найменьше число з масиву
let numericArray = [35, 9, -16, 0, -2, 10];
function task_10(array) {
    let min = array[0];
    for (const minItem of array) {
        if (minItem < min) {
            min = minItem;
        }
    }
    return min;
}
console.log(task_10(numericArray));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrayOfNumbers = [25, 36, 94];
function task_11(array) {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum;
}

console.log(task_11(arrayOfNumbers));


























