// >> for loop <<
// Syntax:
// for(statemt 1, statement 2, statement 3){
// CODE TO BE EXECUTED
// }
// x = 1;
// for (i = 0; i < 10; i++) {
//     console.log(x + i)
// }

// >> for in loop <<
// Syntax: (Type 'forin' in VSCode Will get it systax automatically.)
const obj = {
    Name: 'Jack Reacher',
    Position: "Software Engineer",
    Role: 'Web Devloper'
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
    }
}

// >> for of loop <<
// Syntax: (Type 'forof' in VSCode Will get it systax automatically.)
// for (variable of iterable){
//     CODE TO BE EXECUTED
// }
for (const x of "Jack Reacher") {
    console.log(x)
}

// >> while loop <<
// Syntax:
// while(condition){
//     CODE TO BE EXECUTED
// }
let i = 0
while(i < 6){
    console.log(i)
    i++;
}   

// >> do while loop <<
// Syntax:
// do{
//     CODE TO BE EXECUTED
// }
let x = 14;
do{
    console.log(x);
    x++;
} while(x<6)