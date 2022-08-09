// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let stringValue1 = 'hello world';
let stringValue2 = 'lorem ipsum';
let stringValue3 = 'javascript is cool';
console.log(stringValue1.length, stringValue2.length, stringValue3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let stringValue4 = 'hello world';
let stringValue5 = 'lorem ipsum';
let stringValue6 = 'javascript is cool';
console.log(stringValue4.toUpperCase(), stringValue5.toUpperCase(), stringValue6.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let stringValue7 = 'Hello WORLD';
let stringValue8 = 'LOREM IPSUM';
let stringValue9 = 'JAVASCRIPT IS COOL';
console.log(stringValue7.toLowerCase(), stringValue8.toLowerCase(), stringValue9.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let d = str.trim();
console.log(d);

                           // Почистити від зайвих пробілів тільки з правого боку
let str2 = ' dirty string   ';
let f = str2.trimEnd();
console.log(f);
                           // Почистити від зайвих пробілів тільки з лівого боку
let str3 = ' dirty string   ';
let t = str3.trimStart();
console.log(t);


// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str4 = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str4 = 'Ревуть воли як ясла повні';
const stringToArray = (str4) => str4.split(' ');
console.log(stringToArray(str4));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// За допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let numericArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let strings = numericArray.map(value => value.toString());
console.log(strings);
                                                  //АБО
let numericArray2 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let strings2 = numericArray2.map(value => value + '');
console.log(strings2);
                                                  //АБО
let numericArray3 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let strings3 = numericArray3.map(value => String(value));
console.log(strings3);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
const sortNums = (direction, arr) => {
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        arr.sort((a, b) => b - a);
    }
    return arr;
}
console.log(sortNums('ascending', nums));
console.log(sortNums('descending', nums));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
                          // -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) =>
    b.monthDuration - a.monthDuration));
                  // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);
                                                   //АБО
let filter2 = coursesAndDurationArray.filter(function (value) {
    return value.monthDuration > 5;
});
console.log(filter2);


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let deckOfCards = [
    {
        cardSuit: null,
        value: 'Joker',
        color: 'black'
    },
    {
        cardSuit: null,
        value: 'Joker',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: 'ace',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'ace',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: 'ace',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'ace',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: 'king',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'king',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: 'queen',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'queen',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: 'queen',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'queen',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: 'jack',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'jack',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: '6',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '6',
        color: 'red'
    }
];

// - знайти піковий туз
let find = deckOfCards.find(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log(find);

// - всі шістки
let filterCards = deckOfCards.filter(value => value.value === 6);
console.log(filterCards);

// - всі червоні карти
let filterCards2 = deckOfCards.filter(value => value.color === 'red');
console.log(filterCards2);

// - всі буби
let filterCards3 = deckOfCards.filter(value => value.cardSuit === 'diamond');
console.log(filterCards3);

// - всі трефи від 9 та більше
let filterCards4 = deckOfCards.filter(value => value.cardSuit === 'spade' && value.value > 8 || typeof
    value.value === 'string' && value.cardSuit === 'spade' || value.value === 'Joker' && value.color === 'black');
console.log(filterCards4);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = deckOfCards.reduce((accum, card) => {
        if (card.cardSuit === 'spade') {
            accum.spades.push(card);
        } else if (card.cardSuit === 'diamond') {
            accum.diamonds.push(card);
        } else if (card.cardSuit === 'heart') {
            accum.hearts.push(card);
        } else if (card.cardSuit === 'clubs') {
            accum.clubs.push(card);
        } else {
            accum.joker.push(card);
        }
        return accum;
    }, {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: [],
        joker: []
    }
);
console.log(reduce);





















