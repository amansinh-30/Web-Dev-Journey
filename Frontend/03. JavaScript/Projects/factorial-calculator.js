/*
Write a program to calculate factorial of a number using reduce and using for loops.

5! = 5*4*3*2*1
*/

// let usr = prompt("Enter the number to calculate the factorial: ")

// let a = 3;
// function factorial(number) {
//     let arr = Array.from(Array(number + 1).keys())
//     // console.log(arr.slice(1, ))
//     let c = arr.slice(1,).reduce((a, b) => a * b)
//     return c
//     // console.log(c)
// }

// function facfor(number) {
//     let fac = 1;
//     for (let index = 1; index < number; index++) {
//         fac = fac * index
//     }
//     return fac
// }

// console.log(factorial(a));
// console.log(facfor(a));



let num = 4;
function factorial(number){
    let arr = Array.from(Array(number + 1).keys());
    let c = arr.slice(1, ).reduce((a, b) => a * b);
    return c;
}

function facfor(number){
    let fac = 1;
    for(let index = 1; index < number; index++){
        fac = fac * index;
    }
    return fac
}

console.log(factorial(num))
console.log(facfor(num))