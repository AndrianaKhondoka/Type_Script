type Nums = number;
type Txt = string;
type TruFalse = boolean;
type Empt = void;


let rectangleY = (v1:Nums,v2:Nums): Nums => v1*v2;
console.log(rectangleY(10,5));
//////////////////////////////////////////////////////////////////

let circleY = (rad:Nums):Nums => 3.14*rad*rad;
console.log(circleY(12));
////////////////////////////////////////////////////////////////////


let cylinderY = (height: Nums,rc:Nums): Nums => 2*3.14*height*rc;
console.log(cylinderY(10,6));
/////////////////////////////////////////////////////////////////////

interface UserZ{
    name: string;
    username: string;
    password: string;
}

const usersListX: UserZ[] = [
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
const usersListXFilter = (usersListX: UserZ[]): Empt => {
    for (let i = 0; i < usersListX.length; i++) {
        console.log(usersListX[i]);
    }
};
usersListXFilter(usersListX);
////////////////////////////////////////////////////////////////////

let article2 = (text:Txt): Empt => document.write(`<p>${text}</p>`);
article2('Неможливих речей немає. Є недостатня кількість спроб.');
///////////////////////////////////////////////////////////////////////////


let listUpdate2 = (textTop: Txt): Empt => document.write(`<ul>
                                      <li>${textTop}</li>
                                      <li>${textTop}</li>
                                      <li>${textTop}</li>
                                      </ul>`);
listUpdate2('Java Script');
//////////////////////////////////////////////////////////////////////////


let listShot2 = (number: Nums, text: Txt): Empt => { document.write(`<ul>`)
    for (let i = 0; i < number; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
};
listShot2(3, 'Hello!')
////////////////////////////////////////////////////////////////////////////



let chart2: Array<Nums|Txt|TruFalse> = ['Leanne Graham', 'Delphine', 'html', 'привіт', 'капучино', 15, 8, true];
let items2 = (chart2: Array<Nums|Txt|TruFalse>): Empt => { document.write(`<ul>`)
    for (let element of chart2) {
        document.write(`<li>${element}</li>`)

    }
    document.write(`</ul>`);
};
items2(chart2);
/////////////////////////////////////////////////////////////////////////////

interface UserFeature {
    id: number;
    name: string;
    age: number;
}
let usersTab: UserFeature[] = [
    {id: 1, name: 'Olga', age: 25},
    {id: 2, name: 'Viktor', age: 32},
    {id: 4, name: 'Emilia', age: 41},
    {id: 5, name: 'Alisa', age: 22},
    {id: 6, name: 'Nazar', age: 37},
    {id: 7, name: 'Tetyana', age: 20}
];
let userChart2 =(usersTab: UserFeature[]): Empt => {
    for (let user of usersTab) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
};
userChart2(usersTab);
/////////////////////////////////////////////////////////////////////////


let numbersChart2: Nums[] = [2, 14, 258, 99, 0, -4, 34];
let minimalVal2 = (numbersChart2: Nums[]): Nums => {let min = numbersChart2[0]
    {
        for (const number of numbersChart2) {
            if (number < min) {
                min = number;
            }
        }
    }
    return min;
}
console.log(minimalVal2(numbersChart2));
///////////////////////////////////////////////////////////////////////

let sum2 = (arr: Nums[]): Nums => {let amount = 0;
    for (let arrElement of arr) {
        amount = amount + arrElement;
    }
    return amount;
};
console.log (sum2([18, 10, 4, 74, 8, 33]));
//////////////////////////////////////////////////////////////////////////

let swap2 = (arr: Nums[], index1: Nums, index2: Nums): Nums[] => {let place = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = place;

    return arr;
};
console.log(swap2([51, 2, 17, 88, 24], 0, 1));
///////////////////////////////////////////////////////////////////////////
interface Currency {
    currency:string;
    value: number;
}

let exchangeCash  = (sumUAH: Nums,currencyValues: Currency[],exchangeCashCurrency: Txt): Nums => {let exchangeCashRate:Currency;
    for (let item of currencyValues) {
        if (item.currency === exchangeCashCurrency){
            exchangeCashRate = item;
        }
    }
    return sumUAH/exchangeCashRate.value;
};
console.log(exchangeCash (12000, [{currency: 'USD', value: 42}, {currency: 'EUR', value: 45}], 'EUR'));
console.log(exchangeCash (12000, [{currency: 'USD', value: 42}, {currency: 'EUR', value: 45}], 'USD'));
