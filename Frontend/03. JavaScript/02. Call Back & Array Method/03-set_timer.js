// ==> setTimeout
// #-->> using "setTimeout" function to print something after set a timer
// console.log('Hello Coder, ')
// setTimeout(() => {
//     console.log('.... are you still there?');       //Statement to excute
// }, 3000);                               // Set Timeout. 

// console.log('GOODBYE.');


// ==> setInterval
// #-->> using "setInterval" function to print a statement in 'Loop'.
// const id = setInterval(() => {
//     console.log(Math.random());
// }, 2000);
// clearInterval(id)           // use clearInterval('variable name') to stop running loop.


// ==> filter
// #-->> using "filter" function to print a statement through filter out and print it.
// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// const odds = nums.filter(n => {         // Filter function  
//     return n % 2 === 1;                 // Condition what to do filter.
// })
// console.log(odds);

// const smallNums = nums.filter(n => n < 5);
// console.log(smallNums);

// -->> Example:
// const numbers = [1, 2, 4, 5, 7, 8, 9, 13, 14, 17, 19];
// const even = numbers.filter(n => n % 2 === 0);

// console.log(even);


// const cars = [
//     {
//         company: 'BMW',
//         model: '7i',
//         year: 2020
//     },
//     {
//         company: 'Audi',
//         model: 'R8',
//         year: 2012
//     },
//     {
//         company: 'Hyundai',
//         model: 'Verna',
//         year: 2019
//     },
//     {
//         company: 'Skoda',
//         model: 'Octivia',
//         year: 2007
//     },
//     {
//         company: 'Tata',
//         model: 'Curv',
//         year: 2024
//     }
// ]

// const older = cars.filter(c => c.year < 2022);
// const oldCar = older.map(old => old.company);

// console.log(older);
// cars.filter(c => c.year < 2020).map(c => c.company && c.model);
// console.log(oldCar);

// #-->> Practice Task:
// validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);


// function validUserNames(usernames) {
//     return usernames.filter(name => name.length < 10);
// }
// console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']));


// ==> "Every" Syntax
// #-->> use "every" funtion and give condition it will print everything inside the Array.
// const exams = [80, 92, 98, 89, 77, 75, 90, 89, 84, 81, 77, 70];
// const pass = exams.every(score => score >= 75);

// console.log(pass);


// ==> "Some" Syntax
// #-->> use 'some' function and give some selected value, after enter a condition
// const words = ['dog', 'jilo', 'log', 'cupcake', 'bag', 'wag'];

// words.some(word => word.length > 4);            //true
// words.some(word => word[0] === 'Z');
// words.some(word => word.includes('dog'));




// const allEven = function (arr) {
//     return arr.every(num => num % 2 === 0);
// }


// const allEvens = function (arr) {
//     return arr.every(num => num % 2 === 0);
// }
// console.log(allEvens(2, 4, 6, 8, 10));



const prices = [9.99, 14.99, 28.49, 4.99, 48.99, 20.49, 89.99];

let total = 0;
for (let price of prices) {
    total += price;
}
console.log(total);

// --> use "reduce" function
prices.reduce((total, price) => {
    return total += price
})
console.log(total);

// -->> Finiding minimum value using "reduce"
const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    } else {
        return min;
    }
})
console.log(minPrice);

const totalNum =  [2,4,6,8];
let sumNum = totalNum.reduce((sum, num) => sum + num, 20);
console.log(sumNum);