let arr1 = [30, 16, 'hello', 'привіт', 3, 51, 'andriana', 'номер телефону', true, false];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);
let book4 = { title: 'Heartless', pageCount: 464, genre: 'fantasy' };
let book5 = { title: 'The Outsider', pageCount: 496, genre: 'horror' };
let book6 = { title: 'Їсти, молитися, кохати', pageCount: 416, genre: 'роман' };
console.log(book4, book5, book6);
let bookD = {
    title: 'Heartless',
    pageCount: 464,
    genre: 'fantasy',
    authors: [
        { name: 'Marissa Meyer', age: 40 },
        { name: 'Stephen King', age: 77 },
        { name: 'Елізабет Ґілберт', age: 55 }
    ]
};
let bookE = {
    title: 'The Outsider',
    pageCount: 496,
    genre: 'horror',
    authors: [
        { name: 'Marissa Meyer', age: 40 },
        { name: 'Stephen King', age: 77 },
        { name: 'Елізабет Ґілберт', age: 55 }
    ]
};
let bookF = {
    title: 'Їсти, молитися, кохати',
    pageCount: 416,
    genre: 'роман',
    authors: [
        { name: 'Marissa Meyer', age: 40 },
        { name: 'Stephen King', age: 77 },
        { name: 'Елізабет Ґілберт', age: 55 }
    ]
};
console.log(bookD, bookE, bookF);
let usersArray = [
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
console.log(usersArray[0].password);
console.log(usersArray[1].password);
console.log(usersArray[2].password);
console.log(usersArray[3].password);
console.log(usersArray[4].password);
console.log(usersArray[5].password);
console.log(usersArray[6].password);
console.log(usersArray[7].password);
console.log(usersArray[8].password);
console.log(usersArray[9].password);
let tempsChart = [
    { dayWeek: 'Monday', morningTemps: '+4°C', dayTemps: '+12°C', nightTemps: '+1°C' },
    { dayWeek: 'Tuesday', morningTemps: '+6°C', dayTemps: '+15°C', nightTemps: '+3°C' },
    { dayWeek: 'Wednesday', morningTemps: '+4°C', dayTemps: '+15°C', nightTemps: '+5°C' },
    { dayWeek: 'Thursday', morningTemps: '+1°C', dayTemps: '+8°C', nightTemps: '+3°C' },
    { dayWeek: 'Friday', morningTemps: '+5°C', dayTemps: '+14°C', nightTemps: '+2°C' },
    { dayWeek: 'Saturday', morningTemps: '+4°C', dayTemps: '+11°C', nightTemps: '+1°C' },
    { dayWeek: 'Sunday', morningTemps: '+3°C', dayTemps: '+10°C', nightTemps: '0°C' },
];
console.log(tempsChart);
let x1 = 8;
if (x1 !== 0) {
    console.log('Вірно');
}
else {
    console.log('Невірно');
}
let sNumber = +prompt('enter number 1 0 -3');
if (sNumber !== 0) {
    console.log('Вірно');
}
else {
    console.log('Невірно');
}
//////////////////////////////////////////////////
let timePeriod = 31;
if (timePeriod >= 0 && timePeriod <= 15) {
    console.log('first quarter');
}
else if (timePeriod > 15 && timePeriod <= 30) {
    console.log('second quarter');
}
else if (timePeriod > 30 && timePeriod <= 45) {
    console.log('third quarter');
}
else if (timePeriod > 45 && timePeriod < 60) {
    console.log('fourth quarter');
}
//////////////////////////////////////////////
let dayOfWeek = 11;
if (dayOfWeek >= 1 && dayOfWeek <= 10) {
    console.log('first decade');
}
else if (dayOfWeek > 10 && dayOfWeek <= 20) {
    console.log('second decade');
}
else if (dayOfWeek > 20 && dayOfWeek <= 31) {
    console.log('third decade');
}
let dayNum = '5';
switch (dayNum) {
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
let numX = 11;
let numZ = 34;
if (numX > numZ) {
    console.log(numX);
}
else if (numX < numZ) {
    console.log(numZ);
}
else if (numX === numZ) {
    console.log('===');
}
let z1;
z1 = undefined;
if (!z1) {
    z1 = 'default';
}
let coursesAndDurationArr = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
if (coursesAndDurationArr[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArr[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArr[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArr[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArr[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArr[5].monthDuration > 5) {
    console.log('Супер');
}
/////////////////////////////////////////////////////////
