// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let carBrands = ['Aston Martin', 'Audi', 'BMW', 'Bugatti', 'Cadillac', 'Lamborghini', 'Maserati', 'Mercedes-Benz',
    'Porsche', 'Rolls-Royce'];
console.log(carBrands[0]);
console.log(carBrands[1]);
console.log(carBrands[2]);
console.log(carBrands[3]);
console.log(carBrands[4]);
console.log(carBrands[5]);
console.log(carBrands[6]);
console.log(carBrands[7]);
console.log(carBrands[8]);
console.log(carBrands[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre
let book1 = {
    title: 'I Love This Game',
    pageCount: 320,
    genre: 'The autobiography by Patrice Evra',
};
console.log(book1);

let book2 = {
    title: 'My life in Football',
    pageCount: 320,
    genre: 'The autobiography by Kevin Keegan',
};
console.log(book2);

let book3 = {
    title: 'Cristiano Ronaldo: Life and Career',
    pageCount: 19,
    genre: 'The autobiography by Calvin Barry and Cristiano Ronaldo',
};
console.log(book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
//     Кожен автор має поля name,age
let object1 = {
    title: 'I Love This Game',
    pageCount: 320,
    genre: 'Autobiography',
    authors: [
        {
            name: 'Patrice Evra',
            age: 41
        }

    ]

};
console.log(object1);

let object2 = {
    title: 'My life in Football',
    pageCount: 320,
    genre: 'Autobiography',
    authors: [
        {
            name: 'Kevin Keegan',
            age: 71,
        }

    ]

};
console.log(object2);

let object3 = {
    title: 'Cristiano Ronaldo: Life and Career',
    pageCount: 19,
    genre: 'Autobiography',
    authors: [
        {
            name: 'Cristiano Ronaldo',
            age: 37,
        }

    ]

};
console.log(object3);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let people = [
    {name: 'Alison', username: 'Alison_Alison', password: 'Alison2000'},
    {name: 'Adela', username: 'Adela_Adela', password: 'Adela29'},
    {name: 'Caren', username: 'Caren_Caren', password: 'Caren345'},
    {name: 'Carl', username: 'Carl_Carl', password: 'Carl9999'},
    {name: 'Daniel', username: 'Daniel_Daniel', password: 'Daniel877'},
    {name: 'Edgar', username: 'Edgar_Edgar', password: 'Edgar20'},
    {name: 'Edwin', username: 'Edwin_Edwin', password: 'Edwin0011'},
    {name: 'Eric', username: 'Eric_Eric', password: 'Eric333'},
    {name: 'Malcolm', username: 'Malcolm_Malcolm', password: 'Malcolm987'},
    {name: 'Marcus', username: 'Marcus_Marcus', password: 'Marcus3435'},
];
console.log(people[0].password);
console.log(people[1].password);
console.log(people[2].password);
console.log(people[3].password);
console.log(people[4].password);
console.log(people[5].password);
console.log(people[6].password);
console.log(people[7].password);
console.log(people[8].password);
console.log(people[9].password);

// console.table(people,['password']);













