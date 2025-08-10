// -->>Example:
function rollDice(numSide) {
    return Math.floor(Math.floor(numSide) * 5) + 1;
}
console.log(rollDice(5));

// ==>> Spread method using in Array:
const cars = ['BMW', 'Aston Martin', 'Hyndai', 'Lamborgini'];
const countries = ['USA', 'UK', 'India', 'Europe', 'Japan'];
const car_country = [...cars, ...countries];
console.log(car_country);
// -> Use of 'FOR LOOP'
for (let car of cars) {
    console.log(car);
}

// ==>> Spread with an object
const feline = { legs: 4, family: 'Felidea' };
const canine = { isFurry: true, family: 'Caninae' };
console.log(...feline.family, ' ', ...canine.family);
// console.log{...feline}
const combine = { ...feline, ...canine };
console.log(combine);

// -->> Exaple
const personDataForm = {
    name: 'Jack Reacher',
    email: 'jack.reacher30@gmail.com',
    password: 'Jack123',
    username: 'mr-jack'
}
const newUser = { ...personDataForm, id: 2345, isAdmin: false }
console.log(newUser);
// -->> Example
const minNum = [12, 2, 34, 45, 6, 7, 88, 82]
const numMin = Math.min(...minNum);
// console.log(12,2,34,45,6,7,88,82);
console.log(numMin)

function sum(...nums) {
    return nums.reduce((total, el) => total += el);
}

// ==>> Rest Parameters
function raceResult(gold, silver, ...everyother) {
    console.log(`Gold madel goes to ${gold}.`)
    console.log(`Silver madel goes to ${silver}.`)
    console.log(`Thank you for everyone else: ${everyother}.`)
}
console.log(raceResult('Apex', 'Amanda', 'Jack, Tom, John'));

// ==>> Distructing Arrays
const scores = [8897, 6533, 2360, 1354, 2848, 4589, 7922, 5928, 1398];


const highScore = scores[0];
const secondHigestScore = scores[1];

const [gold, silver, bronze, ...anyOther] = scores;

console.log(gold);


// ==>> Distructing Objects

const usr = {
    email: 'jackreacher@gmail.com',
    password: 'Jack123',
    firstname: 'Jack',
    lastname: 'Reacher',
    qualification: 'Computer Engineer',
    city: 'Surat',
    state: 'Gujarat',
    country: 'India'
}

// const fullName = usr.firstname + ' ' + usr.lastname

const {firstname, email, qualification, city, country} = usr

console.log(usr);

// ==>> Default Distruction Parameters
function personIdentity(firstname, lastname){
    return `${firstname} ${lastname}.`
}

console.log('Jack', "Reacher");

