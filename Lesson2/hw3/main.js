// Знайти та вивести довижину настипних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'
let strA = 'hello world';
console.log(strA.length);
let strB = 'lorem ipsum';
console.log(strB.length);
let strC = 'javascript is cool';
console.log(strC.length);
// Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let s1 = str1.toUpperCase();
console.log(s1);
let str2 = 'lorem ipsum';
let s2 = str2.toUpperCase();
console.log(s2);
let str3 = 'javascript is cool';
let s3 = str3.toUpperCase();
console.log(s3);
// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strY = 'HELLO WORLD';
let sY = strY.toLowerCase();
console.log(sY);
let strX = 'LOREM IPSUM';
let sX = strX.toLowerCase();
console.log(sX);
let strZ = 'JAVASCRIPT IS COOL';
let sZ = strZ.toLowerCase();
console.log(sZ);
// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strDrt = ' dirty string   ';
let sCln = strDrt.trim();
console.log(sCln);
console.log(strDrt.length);
console.log(sCln.length);
// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
function stringToArray(str) {
    if (str) {
        return str.split(' ');
    }
    return ' ';
}
console.log(stringToArray('Ревуть воли як ясла повні'));
// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbersLst = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let strings = numbersLst.map(number => number + '');
console.log(strings);
// створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let numsChart = [11, 21, 3];
function sortNums(numsChart, direction) {
    if (direction === 'ascending')
        return numsChart.sort((a, b) => a - b);
    if (direction === 'descending')
        return numsChart.sort((a, b) => b - a);
}
console.log(sortNums(numsChart, 'ascending'));
console.log(sortNums(numsChart, 'descending'));
// є масив
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
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
class Cours {
}
class CoursMap extends Cours {
}
let coursesAndDurationArrayA = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
let map = coursesAndDurationArrayA
    .sort((a, b) => a.monthDuration - b.monthDuration)
    .filter((value) => value.monthDuration > 5)
    .map((value, index) => ({ id: index + 1, title: value.title, monthDuration: value.monthDuration }));
console.log(map);
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
const suitsArr = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
class CardPoint {
}
const cards = [];
for (const suit of suitsArr) {
    for (const value of values) {
        const card = { cardSuit: suit, value: value };
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        }
        else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);
console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuit === 'diamond'));
console.log(cards.filter(card => card.cardSuit === 'clubs' && (card.value !== '6' && card.value !== '7' && card.value !== '8')));
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const suit = ['spade', 'diamond', 'heart', 'clubs'];
const val = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
class CardQuality {
}
const cardsArr = [];
for (const element of suit) {
    for (const value of val) {
        const cardItem = { cardSuit: element, valueC: value };
        if (element === 'heart' || element === 'diamond') {
            cardItem.color = 'red';
        }
        else {
            cardItem.color = 'black';
        }
        cardsArr.push(cardItem);
    }
}
;
console.log(cardsArr);
let reduce = cardsArr.reduce((accumulator, cardItem) => {
    switch (cardItem.cardSuit) {
        case 'spade':
            accumulator.spades.push(cardItem);
            break;
        case 'diamond':
            accumulator.diamonds.push(cardItem);
            break;
        case 'heart':
            accumulator.hearts.push(cardItem);
            break;
        case 'clubs':
            accumulator.clubs.push(cardItem);
            break;
    }
    return accumulator;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(reduce);
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
class CoursesQuality {
}
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(course => course.modules.includes('sass')));
console.log(coursesArray.filter(course => course.modules.includes('docker')));
