// Get two numbers from user:
let a = prompt('Enter the first number:');
let b = prompt('Enter the second number:');

// check both numbers are interger or if not number throw error:
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError('Arey ye toh Syntax Error ho gaya..!!');
}

// total of both user numbers:
let sum = parseInt(a) + parseInt(b);

let x = sum;
// if something wrong while giving result catch would resolve error and show what do you want to print:
try {
    console.log('The sum of total number result of square is: ', sum * x);
} catch (error) {
    console.log("Opps 'Catch' Error Occur.");
}