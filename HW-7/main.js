// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surName, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surName;
//     this.email = email;
//     this.phone = phone;
// }
// let emptyArray = [];
// let user1 = new User(1, 'Adeline', 'Abrams', 'Abrams1@gmail.com', '0975002854');
// let user2 = new User(2, 'Alex', 'Armstrong', 'Armstrong2@gmail.com', '0975093469');
// let user3 = new User(3, 'Barbara', 'Atkins', 'Atkins3@gmail.com', '0975099853');
// let user4 = new User(4, 'Eddy', 'Bedford', 'Bedford4@gmail.com', '0975002765');
// let user5 = new User(5, 'Edward', 'Holland', 'Holland5@gmail.com', '0975011229');
// let user6 = new User(6, 'Harold', 'Darwin', 'Darwin6@gmail.com', '0967018762');
// let user7 = new User(7, 'Karin', 'Jackson', 'Jackson7@gmail.com', '0638029898');
// let user8 = new User(8, 'Malcolm', 'Collins', 'Collins8@gmail.com', '0987527660');
// let user9 = new User(9, 'Ralf', 'Murphy', 'Murphy9@gmail.com', '0975432781');
// let user10 = new User(10, 'Walter', 'Perkins', 'Perkins10@gmail.com', '0948800211');
// emptyArray.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = emptyArray.filter(value => value.id % 2 ===0);
// console.log(filter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = emptyArray.sort((a, b) => a.id - b.id);
// console.log(sort);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client{
//     constructor(id, name, surName, email, phone,order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surName;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let array = [];
// let client1 = new Client(11, 'Adeline', 'Abrams', 'Abrams1@gmail.com', '0975002854',[1,2,3]);
// let client2 = new Client(21, 'Alex', 'Armstrong', 'Armstrong2@gmail.com', '0975093469',[1]);
// let client3 = new Client(31, 'Barbara', 'Atkins', 'Atkins3@gmail.com', '0975099853',[3,4,5,6,7]);
// let client4 = new Client(41, 'Eddy', 'Bedford', 'Bedford4@gmail.com', '0975002765',[23.45]);
// let client5 = new Client(51, 'Edward', 'Holland', 'Holland5@gmail.com', '0975011229',[1,2,3,4,5,6,7,8]);
// let client6 = new Client(61, 'Harold', 'Darwin', 'Darwin6@gmail.com', '0967018762',[7,8]);
// let client7 = new Client(71, 'Karin', 'Jackson', 'Jackson7@gmail.com', '0638029898',[3,4,5]);
// let client8 = new Client(81, 'Malcolm', 'Collins', 'Collins8@gmail.com', '0987527660',[8,9,10]);
// let client9 = new Client(91, 'Ralf', 'Murphy', 'Murphy9@gmail.com', '0975432781',[36,45,89]);
// let client10 = new Client(100, 'Walter', 'Perkins', 'Perkins10@gmail.com', '0948800211',[2,4,6,8]);
// array.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);


// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort2 = array.sort((a, b) => a.order.length - b.order.length);
// console.log(sort2);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer,year, maxSpeed,engine){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.inf0 = function () {
//         for (const item in this) {
//             if (typeof this[item] !== 'function') {
//                 console.log(`${item} -- ${this[item]}`);
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
//
// }
//
// let car = new Car('Porsche','Germany',2022,300,2.9);
//
// console.log(car);
// car.drive();
// car.inf0();
// car.increaseMaxSpeed(100);
// car.addDriver({name: "Edik", age: 22});
// console.log(car);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car2{
//     constructor(model, producer,year, maxSpeed,engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     inf0(){
//         for (const item in this) {
//             if (typeof this[item] !== 'function') {
//                 console.log(`${item} -- ${this[item]}`);
//             }
//         }
//     }
//
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//
//     addDriver(driver){
//         this.driver = driver;
//     }
//
// }
//
// let car2 = new Car('Porsche','Germany',2022,300,2.9);
//
// let objDriver = {
//     name : 'Edward',
//     age: 22
// }
//
// console.log(car);
// car2.drive();
// car2.inf0();
// car2.increaseMaxSpeed(200);
// car2.addDriver(objDriver);
// console.log(car2);


// створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella{

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderella1 = new Cinderella('Mary',22,35);
let cinderella2 = new Cinderella('Patricia',22,36);
let cinderella3 = new Cinderella('Karin',22,37);
let cinderella4 = new Cinderella('Barbara',22,38);
let cinderella5 = new Cinderella('Alina',22,34);

let array3 = [cinderella1,cinderella2,cinderella3,cinderella4,cinderella5];

class Prince extends Cinderella{
    constructor(name, age, findFootSize) {
        super(name,age);
        this.findFootSize = findFootSize;
    }
}

let prince = new Prince('Edik', 22, 36);

let find = (array, prince) => {
    for (const item of array) {
        if (prince.findFootSize === item.footSize) {
            return `My Cinderella is ${item.name}`
        }
    }
}
console.log(find(array3, prince));

let cinderella = array3.find(value => prince.findFootSize === value.footSize);
console.log(cinderella);

