function fullName(){
    console.log('Jack')
    console.log('Reacher')
    console.log('420')
}

fullName();

function greet(){
    let input = prompt("Enter your name: ");
    console.log(`Hello, ${input} Welcome to JavaScript.`)
}

greet();

function greet(firstname, lastname) {
    // let input = prompt("Enter your name: ");
    let fullname = firstname + ' ' + lastname
    console.log(`Hello ${fullname}, Welcome to JavaScript. I want to say, This is also an amazing 'Programming Language'.`)
    // console.log(`Hello ${person}, Welcome to JavaScript.`)
}

greet('Apex', 'Amanda');



function rant(message) {
    let capital = message.toUpperCase();
    console.log(capital);
    console.log(capital);
    console.log(capital);
}

rant('I hate beets.')


function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1) {
        console.log('Snake Eyes!');
    } else {
        console.log('Not Snake Eyes!')
    }
}

isSnakeEyes(1, 5);

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}
add(30, 21);


function capitalize(word){
    let firstCap = word[0].toUpperCase();
    let restStr = word.slice(1);

    return firstCap + restStr;
}

capitalize('amanda');


function sumArray(nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}

function returnDay(number) {
    if (number === 1) {
        return 'Monday';
    } else if (number === 2) {
        return 'Tuesday';
    } else if (number === 3) {
        return 'Wednesday';
    } else if (number === 4) {
        return 'Thursday';
    } else if (number === 5) {
        return 'Friday';
    } else if (number === 6) {
        return 'Saturday';
    } else if (number === 7) {
        return 'Sunday';
    } else {
        return null;
    }
}


let car_name = 'Hyundai Verna';
function cars() {
    let car_name = 'BMW i7';
    console.log(car_name);
}

// console.log(typeof(cars));
cars();
console.log(car_name);


// for (let i = 0; i < 5; i++){
//     var end = 'Mr. JACK'
//     let msg = 'REACHER';
//     console.log(msg);
// }

// console.log(end);


// -->> EXERCISE:
// function outer(){
//     let heros = ['Spiderman', 'Punisher', 'Black Panther', 'Wolverine'];
//     function inner(){
//         for (let hero of heros){
//             console.log(`Hello Superhero, ${hero.toUpperCase()}.`)
//         }
//     }
//     inner();
// }

// outer();


function callTwin(func){
    func();
    func();
}

function rollDie(){
    const roll = Math.floor(Math.random() * 5) + 1;
    console.log(roll);
}

callTwin(rollDie)