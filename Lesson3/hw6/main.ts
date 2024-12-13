type NuM = number;
type StR= string;
type Boo = boolean;


// Знайти та вивести довижину настипних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'
let strD: StR = 'hello world';
console.log(strD.length);
let strE: StR = 'lorem ipsum';
console.log(strE.length);
let strF: StR = 'javascript is cool';
console.log(strF.length);


// Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'
let strW: StR = 'hello world';
let sW: StR = strW.toUpperCase();
console.log(sW);
let strV: StR = 'lorem ipsum';
let sV: StR = strV.toUpperCase();
console.log(sV);
let strQ: StR = 'javascript is cool';
let sQ: StR = strQ.toUpperCase();
console.log(sQ);



// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strY1: StR = 'HELLO WORLD';
let sY1: StR = strY1.toLowerCase();
console.log(sY1);
let strX1: StR = 'LOREM IPSUM';
let sX1: StR  = strX1.toLowerCase();
console.log(sX1);
let strZ1: StR = 'JAVASCRIPT IS COOL';
let sZ1: StR = strZ1.toLowerCase();
console.log(sZ1);


// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strDrt1: StR = ' dirty string   ';
let sCln1: StR = strDrt1.trim( );
console.log(sCln1);
console.log(strDrt1.length);
console.log(sCln1.length);


// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
function stringToArray1(str: StR): StR|StR[] {
    if (str){
        return str.split(' ');
    }
    return ' ';
}
console.log(stringToArray1('Ревуть воли як ясла повні'));


// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbersLst1: NuM[] = [10,8,-7,55,987,-1011,0,1050,0];
let strings1: StR[] = numbersLst1.map(number => number + '');
console.log(strings1);


// створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let numsChart1: NuM[] = [11,21,3];
function sortNums1 (numsChart1: NuM[], direction: StR): NuM[] {
    if (direction === 'ascending') return numsChart1.sort((a, b) => a-b);
    if (direction === 'descending') return numsChart1.sort((a, b) => b-a);
}
console.log(sortNums1(numsChart1, 'ascending'));
console.log(sortNums1(numsChart1, 'descending'));


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
interface Cours1 {
    title: string;
    monthDuration: number;
}
interface CoursMap1 extends Cours1{
    id: number;
    title: string;
    monthDuration: number;
}
let coursesAndDurationArrayB: Cours1[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let map1: CoursMap1[] = coursesAndDurationArrayB
    .sort((a, b): NuM => a.monthDuration - b.monthDuration)
    .filter((value): Boo => value.monthDuration > 5)
    .map((value,index): CoursMap1 => ({id: index + 1, title: value.title, monthDuration: value.monthDuration}));
console.log(map1);


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

const suitsArr1: StR[] =['spade', 'diamond','heart', 'clubs'];
const values1: StR[]  = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];

interface CardPoint1 {
    cardSuit: string;
    value: string;
    [x: string]: string;
}

const cards1: CardPoint1[] = [];

for (const suit of suitsArr1){
    for (const value of values1) {
        const card1: CardPoint1 = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond'){
            card1.color = 'red';
        }else{
            card1.color = 'black';
        }
        cards1.push(card1);
    }
}
console.log(cards1);
console.log(cards1.find(card1 => card1.value === 'ace' && card1.cardSuit === 'spade'));
console.log(cards1.filter(card1 => card1.value === '6'));
console.log(cards1.filter(card1 => card1.color === 'red'));
console.log(cards1.filter(card1 => card1.cardSuit === 'diamond'));
console.log(cards1.filter(card1 => card1.cardSuit === 'clubs' && (card1.value !== '6' && card1.value !== '7' && card1.value !== '8')));



// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const suit1: StR[] =['spade', 'diamond','heart', 'clubs'];
const val1: StR[] = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];
interface CardQlt {
    cardSuit: string;
    valueC: string;
    [x: string]: string;
}
const cardsArr1: CardQlt[] = [];
for (const element of suit1){
    for (const value of val1) {
        const cardItem1: CardQlt = {cardSuit: element, valueC: value};
        if (element === 'heart' || element === 'diamond'){
            cardItem1.color = 'red';
        }else{
            cardItem1.color = 'black';
        }
        cardsArr1.push(cardItem1);
    }
}
console.log(cardsArr1);
let reduce1= cardsArr1.reduce((accumulator, cardItem1) => {
    switch (cardItem1.cardSuit) {
        case 'spade':
            accumulator.spades.push(cardItem1);
            break;
        case 'diamond':
            accumulator.diamonds.push(cardItem1);
            break;
        case 'heart':
            accumulator.hearts.push(cardItem1);
            break;
        case 'clubs':
            accumulator.clubs.push(cardItem1);
            break;
    }
    return accumulator;
},{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(reduce1);


// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
interface CoursesQlt {
    title: string;
    monthDuration: number;
    hourDuration: number;
    modules: string[]
}
let coursesArray1: CoursesQlt[] = [
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
console.log(coursesArray1.filter(course => course.modules.includes('sass')));
console.log(coursesArray1.filter(course => course.modules.includes('docker')));
