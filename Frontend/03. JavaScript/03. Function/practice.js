function fullname() {
    console.log('Apex')
    console.log('Software Engineer')
    console.log('777')
}

fullname()

// function greet() {
//     let usr = prompt('Enter your good name:')
//     console.log(`Hello ${usr}, Welcome to lean again JS.`)
// }
// greet()

function greet(firstname, lastname) {
    let fullname = firstname + ' ' + lastname;
    console.log(`Hello ${fullname}, Welcome to Learning JavaScript Again. I wish this time you would bring lots of postive energy. `)
}

greet('Apex', 'Amanada')

function sum(a, b){
    return a + b;
}

result = sum(4, 21);
web = sum(2, 34);
det = sum(2, 5);

console.log(`You have to go GYM: ${result}`)
console.log(`You have to FINSIH WEB DEVELOPMENT: ${web}`)
console.log(`You have to FINISH DET: ${det}`)