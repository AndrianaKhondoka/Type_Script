let u;
for (let u = 0; u < 10; u++) {
    document.write('<div>Hello, world!</div>');
}
////////////////////////////////////////////////
let v1;
for (let v1 = 0; v1 < 10; v1++) {
    document.write(`<div>student №${v1}</div>`);
}
/////////////////////////////////////////////////
let w1 = 0;
while (w1 < 20) {
    document.write(`<h1>Take care!</h1>`);
    w1++;
}
//////////////////////////////////////////////////////
let t1 = 0;
while (t1 < 20) {
    document.write(`<h1>Take care! ${t1}</h1>`);
    t1++;
}
let chartOfItems;
chartOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (let i = 0; i < chartOfItems.length; i++) {
    document.write(`<li>${chartOfItems[i]}</li>`);
}
document.write(`</ul>`);
let foodStuff = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.myvitaminstore.pk/cdn/shop/files/tapal-green-tea-selection-pack-tea-bags-32-ct-354813.jpg?v=1713783899&width=720'
    },
];
for (const item of foodStuff) {
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${item.title}. Price - ${item.price}</h3>
            <img src="${item.image}" alt="" class="product-image">
         </div>`);
}
let usersData = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
for (let user of usersData) {
    if (user.status) {
        console.log(user);
    }
}
for (let user of usersData) {
    if (!user.status) {
        console.log(user);
    }
}
for (let user of usersData) {
    if (user.age > 30) {
        console.log(user);
    }
}
//////////////////////////////////////////////
