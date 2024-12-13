type Str = string;
type Num = number;
type Bool = boolean;

let a1: Str = 'hello';
console.log(a1);
let b1: Str = 'owu';
console.log(b1);
let c1: Str = 'com';
console.log(c1);
let d1: Str = 'ua';
console.log(d1);
let e1: Num = 1;
console.log(e1);
let f1: Num = 10;
console.log(f1);
let g1: Num = -999;
console.log(g1);
let h1: Num = 123;
console.log(h1);
let i1: Num = 3.14;
console.log(i1);
let j1: Num = 2.7;
console.log(j1);
let k1: Num = 16;
console.log(k1);
let l1: Bool = true;
console.log(l1);
let m1: Bool = false;
console.log(m1);
////////////////////////////////////////////

let firstName1: Str = 'Андріана';
let middleName1: Str = 'Віталіївна';
let lastName1: Str = 'Хондока';
let person1: Str =`${lastName1} ${firstName1} ${middleName1}`;
console.log(person1);
////////////////////////////////////////

let  o1: Num = 100;
console.log(typeof o1, o1);
let p1: Str = '100';
console.log(typeof p1, p1);
let r1: Bool = true;
console.log(typeof r1, r1);
/////////////////////////////////////////

let nam1: Str = prompt('Ім`я', 'Андріана');
console.log(nam1);
let middleNam1: Str = prompt('По-батькові', 'Віталіївна');
console.log(middleNam1);
let age1: Str = prompt('Вік', '30');
console.log(age1);
/////////////////////////////////////////