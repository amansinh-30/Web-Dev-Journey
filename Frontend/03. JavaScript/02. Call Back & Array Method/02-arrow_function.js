// #-->>'Curly Brackets' use {}:

// #--> Square function
const square = (num) => {
    return num * num;
}
console.log(square(4));

// #--> Subtraction
const subtract = (x, y) => {
    return x - y;
}
console.log(subtract(2025, 1998));

// #--> Multiplication
const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(2, 3));

// #--> Random number generator:
const rollDice = (a, b) => {
    return Math.floor(Math.random() * 5) + 1;
}
console.log(rollDice());

const greet = (name) => {
    return `Hey, ${name}!`;
}
console.log(greet('Hagrid'));


// #==> 'Parentheses' use (): 
//      usually it use to write one line code.
const dice = () => (
    Math.floor(Math.random() * 5) + 1
)
console.log(dice())

//-->> Age Calculator
// const age = function findAge() {
//     let input = parseInt(prompt("Enter your birth year: "))
//     curtYear = 2025
//     find = curtYear - input
//     return find
// }
// console.log(age());



// -->> Regular Function
const isEven = function (num){
    return num % 2 === 0;
}
// -->> Arrow Function
const even = (num) =>{ 
    return num % 2 === 0; 
}
// -->> No parent around parameter
const evenNum = num => {
    return num % 2 === 0;
}
// -->> Implicit return
const isEvenNum = num => (
    num % 2 === 0
)
// --->> One Line Implicit
const isNum = num => num % 2 === 0; 

