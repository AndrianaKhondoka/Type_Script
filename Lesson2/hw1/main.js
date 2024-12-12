function rectangle(a, b) {
    let area = a * b;
    console.log(area);
    return area;
}
rectangle(8, 23);
function circle(radius) {
    let area = 3.14 * radius * radius;
    console.log(area);
    return area;
}
circle(17);
function cylinder(h, r) {
    let area = 2 * 3.14 * h * r;
    console.log(area);
    return area;
}
cylinder(14, 5);
const usersPoint = [
    { name: "Leanne Graham", username: "Bret", password: "Lea1999T" },
    { name: "Ervin Howell", username: "Antonette", password: "1212rS" },
    { name: "Clementine Bauch", username: "Samantha", password: "SAm0001988" },
    { name: "Patricia Lebsack", username: "Karianne", password: "Viktory123" },
    { name: "Chelsey Dietrich", username: "Kamren", password: "KDietrich0000" },
    { name: "Dennis Schulist", username: "Leopoldo_Corkery", password: "cook75" },
    { name: "Kurtis Weissnat", username: "Elwyn.Skiles", password: "Sk1488882" },
    { name: "Nicholas Runolfsdottir", username: "Maxime_Nienow", password: "max771155" },
    { name: "Glenna Reichert", username: "Delphine", password: "54428330glenna" },
    { name: "Clementina DuBuque", username: "Moriah.Stanton", password: "27121980" },
];
function userFilter(usersPoint) {
    for (const user of usersPoint) {
        console.log(user);
    }
}
userFilter(usersPoint);
function article(text) {
    document.write(`<p>${text}</p>`);
}
article('Неможливих речей немає. Є недостатня кількість спроб.');
function list(text) {
    document.write(`
                        <ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                        </ul>
                   `);
}
list('Java Script');
function listWrite(number, txt) {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`
                            <li>${txt}</li>
                      `);
    }
    document.write(`</ul>`);
}
listWrite(12, 'Hello!');
const listS = ['Leanne Graham', 'Delphine', 'html', 'привіт', 'капучино', 15, 8, true];
function items1(listS) {
    document.write(`<ul>`);
    for (const listSElement of listS) {
        document.write(`<li>${listSElement}</li>`);
    }
    document.write(`</ul>`);
}
items1(listS);
class UserType {
}
const usersU = [
    { id: 1, name: 'Olga', age: 25 },
    { id: 2, name: 'Viktor', age: 32 },
    { id: 4, name: 'Emilia', age: 41 },
    { id: 5, name: 'Alisa', age: 22 },
    { id: 6, name: 'Nazar', age: 37 },
    { id: 7, name: 'Tetyana', age: 20 }
];
function userList1(usersU) {
    for (const user of usersU) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
userList1(usersU);
let numbersArr = [2, 14, 258, 99, 0, -4, 34];
function minimalValue(numbersArr) {
    let min = numbersArr[0];
    for (const number of numbersArr) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(minimalValue(numbersArr));
function sum(arr) {
    let amount = 0;
    for (const arrElement of arr) {
        amount = amount + arrElement;
    }
    return amount;
}
console.log(sum([18, 10, 4, 74, 8, 33]));
function swap(arr1, index1, index2) {
    let place = arr1[index1];
    arr1[index1] = arr1[index2];
    arr1[index2] = place;
    return arr1;
}
console.log(swap([51, 2, 17, 88, 24], 0, 1));
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exchangeRate;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            exchangeRate = item;
        }
    }
    return sumUAH / exchangeRate.value;
}
console.log(exchange(12000, [{ currency: 'USD', value: 42 }, { currency: 'EUR', value: 45 }], 'EUR'));
console.log(exchange(12000, [{ currency: 'USD', value: 42 }, { currency: 'EUR', value: 45 }], 'USD'));
