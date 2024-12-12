let arr;
arr = [30, 16, 'hello', 'привіт', 3, 51, 'andriana', 'номер телефону', true, false];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
///////////////////////////////////////////////////////
class Books {
}
let book1 = { title: 'Heartless', pageCount: 464, genre: 'fantasy' };
let book2 = { title: 'The Outsider', pageCount: 496, genre: 'horror' };
let book3 = { title: 'Їсти, молитися, кохати', pageCount: 416, genre: 'роман' };
console.log(book1, book2, book3);
//////////////////////////////////////////////////////
class BooksCollection {
}
let bookA = {
    title: 'Heartless',
    pageCount: 464,
    genre: 'fantasy',
    authors: [
        { name: 'Marissa Meyer', age: 40 },
        { name: 'Stephen King', age: 77 },
        { name: 'Елізабет Ґілберт', age: 55 }
    ]
};
let bookB = {
    title: 'The Outsider',
    pageCount: 496,
    genre: 'horror',
    authors: [
        { name: 'Marissa Meyer', age: 40 },
        { name: 'Stephen King', age: 77 },
        { name: 'Елізабет Ґілберт', age: 55 }
    ]
};
let bookC = {
    title: 'Їсти, молитися, кохати',
    pageCount: 416,
    genre: 'роман',
    authors: [
        { name: 'Marissa Meyer', age: 40 },
        { name: 'Stephen King', age: 77 },
        { name: 'Елізабет Ґілберт', age: 55 }
    ]
};
console.log(bookA, bookB, bookC);
//////////////////////////////////////////////////////////
class User {
}
let users = [
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
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
/////////////////////////////////////////////////////////////
class DayTemps {
}
let temps = [
    { day: 'Monday', morningTemp: '+4°C', dayTemp: '+12°C', nightTemp: '+1°C' },
    { day: 'Tuesday', morningTemp: '+6°C', dayTemp: '+15°C', nightTemp: '+3°C' },
    { day: 'Wednesday', morningTemp: '+4°C', dayTemp: '+15°C', nightTemp: '+5°C' },
    { day: 'Thursday', morningTemp: '+1°C', dayTemp: '+8°C', nightTemp: '+3°C' },
    { day: 'Friday', morningTemp: '+5°C', dayTemp: '+14°C', nightTemp: '+2°C' },
    { day: 'Saturday', morningTemp: '+4°C', dayTemp: '+11°C', nightTemp: '+1°C' },
    { day: 'Sunday', morningTemp: '+3°C', dayTemp: '+10°C', nightTemp: '0°C' },
];
console.log(temps);
//////////////////////////////////////////////////////////////
let x = 8;
if (x !== 0) {
    console.log('Вірно');
}
else {
    console.log('Невірно');
}
let s = +prompt('enter number 1 0 -3');
if (s !== 0) {
    console.log('Вірно');
}
else {
    console.log('Невірно');
}
//////////////////////////////////////////////////
let time = 31;
if (time >= 0 && time <= 15) {
    console.log('first quarter');
}
else if (time > 15 && time <= 30) {
    console.log('second quarter');
}
else if (time > 30 && time <= 45) {
    console.log('third quarter');
}
else if (time > 45 && time < 60) {
    console.log('fourth quarter');
}
//////////////////////////////////////////////
let day;
day = 11;
if (day >= 1 && day <= 10) {
    console.log('first decade');
}
else if (day > 10 && day <= 20) {
    console.log('second decade');
}
else if (day > 20 && day <= 31) {
    console.log('third decade');
}
/////////////////////////////////////////////////////
let dayNumber;
dayNumber = '5';
switch (dayNumber) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('????');
}
///////////////////////////////////////////////
let num = 11;
let numB = 34;
if (num > numB) {
    console.log(num);
}
else if (num < numB) {
    console.log(numB);
}
else if (num === numB) {
    console.log('===');
}
/////////////////////////////////////////////////
let z;
z = undefined;
if (!z) {
    z = 'default';
}
///////////////////////////////////////////////////////
class Courses {
}
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}
/////////////////////////////////////////////////////////
