type Numer = number;
type Word = string;
type Veracity = boolean;
type Empty = void;

function rectangleX(a: Numer, b: Numer): Numer {
    let area = a * b;
    console.log(area);
    return area;
}
rectangleX(8, 23);


function circleX(radius: Numer): Numer {
    let area = 3.14*radius*radius;
    console.log(area);
    return area;
}
circleX(17);

function cylinderZ(h:Numer, r:Numer):Numer {
    let area =2*3.14*h*r;
    console.log(area);
    return area;
}
cylinderZ(14, 5);

interface UserDt {
    name: string;
    username: string;
    password: string;
}

const userData: UserDt[] = [
    {name: "Leanne Graham", username: "Bret", password: "Lea1999T"},
    {name: "Ervin Howell", username: "Antonette", password: "1212rS"},
    {name: "Clementine Bauch", username: "Samantha", password: "SAm0001988"},
    {name: "Patricia Lebsack", username: "Karianne", password: "Viktory123"},
    {name: "Chelsey Dietrich", username: "Kamren", password: "KDietrich0000"},
    {name: "Dennis Schulist", username: "Leopoldo_Corkery", password: "cook75"},
    {name: "Kurtis Weissnat", username: "Elwyn.Skiles", password: "Sk1488882"},
    {name: "Nicholas Runolfsdottir", username: "Maxime_Nienow", password: "max771155"},
    {name: "Glenna Reichert", username: "Delphine", password: "54428330glenna"},
    {name: "Clementina DuBuque", username: "Moriah.Stanton", password: "27121980"},
];
function userFiltered(userData:UserDt[]):Empty {
    for (const user of userData) {
        console.log(user);
    }
}
userFiltered(userData);

function articleTxt (text:Word):Empty {
    document.write(`<p>${text}</p>`);
}
articleTxt('Неможливих речей немає. Є недостатня кількість спроб.');

function chartY (text:Word):Empty {
    document.write(`
                        <ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                        </ul>
                   `)
}
chartY('Java Script');

function listNotation (number:Numer, txt:Word):Empty {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`
                            <li>${txt}</li>
                      `);
    }
    document.write(`</ul>`);
}
listNotation (12, 'Hello!');

const listAny: Array<Word|&Numer|&Veracity> = ['Leanne Graham', 'Delphine', 'html', 'привіт', 'капучино', 15, 8, true];
function item (listAny):Empty {
    document.write(`<ul>`)
    for (const element of listAny) {
        document.write(`<li>${element}</li>`)

    }
    document.write(`</ul>`);
}
item(listAny);


interface UserPoint {
    id: number;
    name: string;
    age: number;
}
const usersX: UserPoint[] = [
    {id: 1, name: 'Olga', age: 25},
    {id: 2, name: 'Viktor', age: 32},
    {id: 4, name: 'Emilia', age: 41},
    {id: 5, name: 'Alisa', age: 22},
    {id: 6, name: 'Nazar', age: 37},
    {id: 7, name: 'Tetyana', age: 20}
];
function userListX(usersX):Empty {
    for (const user of usersX) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);

    }
}
userListX(usersX);

let numbersArray: Numer[] = [2, 14, 258, 99, 0, -4, 34];
function minimalMeaning(numbersArray:Numer[]):Numer {
    let minNum = numbersArray[0];
    for (const number of numbersArray) {
        if (number < minNum){
            minNum = number
        }
    }
    return minNum;
}
console.log(minimalMeaning(numbersArray));

function total (arr: Numer[]):Numer {
    let amountX = 0;
    for (const arrElement of arr) {
        amountX = amountX + arrElement;
    }
    return amountX;
}
console.log (total([18, 10, 4, 74, 8, 33]));

function quantum (arrY: Numer[], indexY:Numer, indexZ: Numer): Numer[]  {
    let place1 = arrY[indexY];
    arrY[indexY] = arrY[indexZ];
    arrY[indexZ] = place1;

    return arrY;
}
console.log(quantum([51, 2, 17, 88, 24], 0, 1));

interface Curren {
    currency:string;
    value: number;
}

function exchanger(sumUAH: Numer,currencyValues: Curren[],exchangeCurrency: Word):Numer {
    let exchangeRate:{currency:Word, value: Numer};
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            exchangeRate = item;
        }
    }
    return sumUAH/exchangeRate.value

}
console.log(exchanger(12000, [{currency: 'USD', value: 42}, {currency: 'EUR', value: 45}], 'EUR'));
console.log(exchanger(12000, [{currency: 'USD', value: 42}, {currency: 'EUR', value: 45}], 'USD'));