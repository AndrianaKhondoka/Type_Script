let rectangleA = (v1:number,v2:number): number => v1*v2;
console.log(rectangleA(10,5));
//////////////////////////////////////////////////////////////////

let circle1 = (rad:number):number => 3.14*rad*rad;
console.log(circle1(12));
////////////////////////////////////////////////////////////////////


let cylinder1 = (height: number,rc: number): number => 2*3.14*height*rc;
console.log(cylinder1(10,6));
/////////////////////////////////////////////////////////////////////

type User2 = {name: string, username: string, password: string,};
const users2: User2[] = [
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
const users2Filter = (users2: User2[]): void => {
    for (let i = 0; i < users2.length; i++) {
        console.log(users2[i]);
    }
};
users2Filter(users2);
////////////////////////////////////////////////////////////////////

let article1 = (text:string): void => document.write(`<p>${text}</p>`);
article1('Неможливих речей немає. Є недостатня кількість спроб.');
///////////////////////////////////////////////////////////////////////////


let listUpdate = (textTop: string): void => document.write(`<ul>
                                      <li>${textTop}</li>
                                      <li>${textTop}</li>
                                      <li>${textTop}</li>
                                      </ul>`);
listUpdate('Java Script');
//////////////////////////////////////////////////////////////////////////


let listShot = (number: number, text: string): void => { document.write(`<ul>`)
    for (let i = 0; i < number; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
};
listShot(3, 'Hello!')
////////////////////////////////////////////////////////////////////////////


type ChartType = [string, string, string, string, string, number, number, boolean];
let chart: ChartType = ['Leanne Graham', 'Delphine', 'html', 'привіт', 'капучино', 15, 8, true];
let items = (chart: ChartType): void => { document.write(`<ul>`)
    for (let element of chart) {
        document.write(`<li>${element}</li>`)

    }
    document.write(`</ul>`);
};
items(chart);
/////////////////////////////////////////////////////////////////////////////

class UserT {
    id: number;
    name: string;
    age: number;
}
let usersTable: UserT[] = [
    {id: 1, name: 'Olga', age: 25},
    {id: 2, name: 'Viktor', age: 32},
    {id: 4, name: 'Emilia', age: 41},
    {id: 5, name: 'Alisa', age: 22},
    {id: 6, name: 'Nazar', age: 37},
    {id: 7, name: 'Tetyana', age: 20}
];
let userChart =(usersTable: UserT[]): void => {
    for (let user of usersTable) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
};
userChart(usersTable);
/////////////////////////////////////////////////////////////////////////


let numbersChart: number[] = [2, 14, 258, 99, 0, -4, 34];
let minimalVal = (numbersChart: number[]): number => {let min = numbersChart[0]
    {
        for (const number of numbersChart) {
            if (number < min) {
                min = number;
            }
        }
    }
    return min;
}
console.log(minimalVal(numbersChart));
///////////////////////////////////////////////////////////////////////

let sum1 = (arr: number[]): number => {let amount = 0;
    for (let arrElement of arr) {
        amount = amount + arrElement;
    }
    return amount;
};
console.log (sum1([18, 10, 4, 74, 8, 33]));
//////////////////////////////////////////////////////////////////////////

let swap1 = (arr: number[], index1: number, index2: number): number[] => {let place = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = place;

    return arr;
};
console.log(swap1([51, 2, 17, 88, 24], 0, 1));
///////////////////////////////////////////////////////////////////////////

let exchangeMoney  = (sumUAH: number,currencyValues: {currency:string, value: number}[],exchangeMoneyCurrency: string): number => {let exchangeMoneyRate:{currency:string, value: number};
    for (let item of currencyValues) {
        if (item.currency === exchangeMoneyCurrency){
            exchangeMoneyRate = item;
        }
    }
    return sumUAH/exchangeMoneyRate.value;
};
console.log(exchangeMoney (12000, [{currency: 'USD', value: 42}, {currency: 'EUR', value: 45}], 'EUR'));
console.log(exchangeMoney (12000, [{currency: 'USD', value: 42}, {currency: 'EUR', value: 45}], 'USD'));
