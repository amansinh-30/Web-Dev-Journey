let maximum = parseInt(prompt('Enter a maximum number: '));
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number: '));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter a first guess! (Type 'q' to quit): ");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt('Too High! Enter a new guess: ');
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt('Too Low! Enter a new guess: ');
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please Enter a number or 'q' to quit");
        attempts++;
    }
}

if (guess === 'q') {
    console.log('Okay, You quit!');
} else {
    console.log('Congrats you WIN!');
    console.log(`Finally, You did it after ${attempts} guesses.`);
}
