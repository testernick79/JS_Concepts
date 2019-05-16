let array = [12, 13];
//let normalarray = [1, 2, 3, 4];

//adding values from first array
let normalarray = [1, array, 3, 4];


let a1 = ['a', 'b', 'c', 'd'];
let a2 = ['e', 'f', 'g', 'h'];

let a3 = [...a1, ...a2];

let ob1 = {name: 'Randy', age: 99 };
let ob2 = {name: 'Alex', email: 'atriller@123.com'};

let mergeOb = {...ob1, ...ob2};
console.log(mergeOb);