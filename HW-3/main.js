// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 10;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
//     до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 22;
if (time >= 0 && time <= 15) {
    console.log('First quarter');
} else if (time > 15 && time <= 30) {
    console.log('Second quarter');
} else if (time > 30 && time <= 45) {
    console.log('Third quarter');
}else if (time > 45 && time < 60) {
    console.log('Fourth quarter');
}else {
    console.log('????');
}


// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 25;
if (day >= 1 && day <=10) {
    console.log('First half');
} else if (day > 10 && day <= 20) {
    console.log('Second half');
} else if (day > 20 && day <= 31) {
    console.log('Third half');
} else {
    console.log('????');
}


// - Скласти розклад на тиждень за домопоги switch.
//     Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
//     (можна замість плану на день, назву дня англійською).
let timetable = +prompt('Enter number');
switch (timetable) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('????');
}


// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let a = 2;
let b = 5;
if (a > b) {
    console.log(a);
}else if (b > a) {
    console.log(b);
} else {
    console.log('Identical');
}


// - є змінна z, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній z значення "default"
// якщо значення змінної z являється falsy (хибноподыбне, тобто кастується до false)
let z = NaN || 'default';
console.log(z);

