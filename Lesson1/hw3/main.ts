let q: number;
q = 8;
for (let q = 0; q < 10; q++) {
    document.write('<div>Hello, world!</div>')
}
////////////////////////////////////////////////

let v: number;
for (let v = 0; v < 10; v++){
    document.write(`<div>student №${v}</div>`)
}
/////////////////////////////////////////////////


let w: number;
w = 0;
while (w<20){
    document.write(`<h1>Take care!</h1>`);
    w++;
}
//////////////////////////////////////////////////////


let t:number;
t = 0;
while (t<20){
    document.write(`<h1>Take care! ${t}</h1>`);
    t++;
}
////////////////////////////////////////////////////


let listOfItems: Array<string>;
listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (let i =0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`)
}
document.write(`</ul>`);
///////////////////////////////////////////////


class Product {
    title: string;
    price: number;
    image: string;
}
let products: Product[] = [
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
for (const product of products) {
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
            <img src="${product.image}" alt="" class="product-image">
         </div>`
    )
}
/////////////////////////////////////////////////////////////


class Us {
    name: string;
    age: number;
    status: boolean;
}
let userList: Us[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (let user of userList) {
    if (user.status){
        console.log(user);
    }
}

for (let user of userList) {
    if (!user.status){
        console.log(user);
    }
}

for (let user of userList) {
    if (user.age > 30){
        console.log(user);
    }
}
//////////////////////////////////////////////
