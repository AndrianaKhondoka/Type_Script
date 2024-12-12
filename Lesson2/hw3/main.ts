// Знайти та вивести довижину настипних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'
let strA: string = 'hello world';
console.log(strA.length);
let strB: string = 'lorem ipsum';
console.log(strB.length);
let strC: string = 'javascript is cool';
console.log(strC.length);


// Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'
let str1: string = 'hello world';
let s1: string = str1.toUpperCase();
console.log(s1);
let str2: string = 'lorem ipsum';
let s2: string = str2.toUpperCase();
console.log(s2);
let str3: string = 'javascript is cool';
let s3: string = str3.toUpperCase();
console.log(s3);



// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strY: string = 'HELLO WORLD';
let sY: string = strY.toLowerCase();
console.log(sY);
let strX: string = 'LOREM IPSUM';
let sX: string  = strX.toLowerCase();
console.log(sX);
let strZ: string = 'JAVASCRIPT IS COOL';
let sZ: string = strZ.toLowerCase();
console.log(sZ);


// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strDrt: string = ' dirty string   ';
let sCln: string = strDrt.trim( );
console.log(sCln);
console.log(strDrt.length);
console.log(sCln.length);


// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
function stringToArray(str: string): string|string[] {
    if (str){
        return str.split(' ');
    }
    return ' ';
}
console.log(stringToArray('Ревуть воли як ясла повні'));


// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbersLst: number[] = [10,8,-7,55,987,-1011,0,1050,0];
let strings: string[] = numbersLst.map(number => number + '');
console.log(strings);


// створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let numsChart: number[] = [11,21,3];
function sortNums (numsChart: number[], direction: string): number[] {
    if (direction === 'ascending') return numsChart.sort((a, b) => a-b);
    if (direction === 'descending') return numsChart.sort((a, b) => b-a);
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
    title: string;
    monthDuration: number;
}
class CoursMap extends Cours{
    id: number;
    title: string;
    monthDuration: number;
}
let coursesAndDurationArrayA: Cours[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let map: CoursMap[] = coursesAndDurationArrayA
    .sort((a, b): number => a.monthDuration - b.monthDuration)
    .filter((value): boolean => value.monthDuration > 5)
    .map((value,index): CoursMap => ({id: index + 1, title: value.title, monthDuration: value.monthDuration}));
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

const suitsArr: string[] =['spade', 'diamond','heart', 'clubs'];
const values: string[]  = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];

class CardPoint {
    cardSuit: string;
    value: string;
    [x: string]: string;
}

const cards: CardPoint[] = [];

for (const suit of suitsArr){
    for (const value of values) {
        const card: CardPoint = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond'){
            card.color = 'red';
        }else{
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
const suit: string[] =['spade', 'diamond','heart', 'clubs'];
const val: string[] = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];
class CardQuality {
    cardSuit: string;
    valueC: string;
    [x: string]: string;
}
const cardsArr: CardQuality[] = [];
for (const element of suit){
    for (const value of val) {
        const cardItem: CardQuality = {cardSuit: element, valueC: value};
        if (element === 'heart' || element === 'diamond'){
            cardItem.color = 'red';
        }else{
            cardItem.color = 'black';
        }
        cardsArr.push(cardItem);
    }
};
console.log(cardsArr);
let reduce= cardsArr.reduce((accumulator, cardItem) => {
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
},{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(reduce);


// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
class CoursesQuality {
    title: string;
    monthDuration: number;
    hourDuration: number;
    modules: string[]
}
let coursesArray: CoursesQuality[] = [
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
