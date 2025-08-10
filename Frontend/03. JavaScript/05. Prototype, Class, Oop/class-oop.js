// let obj = {
//     name: 'Jack',
//     age: 27,
// }

// console.log(obj);

// let newName = {
//     name: 'Apex',
// }

// let newAge = {
//     age: 28
// }

// // newAge.__proto__ = newName;
// newName.__proto__ = newAge;
// console.log(newName);


class Animal {
    constructor(name) {
        // use "this.argument" can create a variable
        this.name = name
        console.log('Object is created.....');
    }
    // first function
    animalKing() {
        console.log('Lion is the King of the Jungle.');
    }
    // second function
    national() {
        console.log('Tiger is the national Animal of India');
    }
}

// print class
let a = new Animal('Shera');
console.log(a);
// console.log(a.animalKing());
// console.log(a.national());

// create new class and using "extends (class name)" word we can add the value of previous class
class Fish extends Animal {
    constructor(name) {
        super(name)
        console.log('Object is created and Whale is Fish....');
    }
    // use "super.function()" to get the previous function values.
    animalKing() {
        super.animalKing();
        console.log('Whale is Queen of the Ocean.');

    }
}

// print second class
let f = new Fish('Dolphin');
// console.log(f);
console.log(f.animalKing());




