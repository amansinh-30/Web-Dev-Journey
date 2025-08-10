/*
Create a business name generator by combining list 

Adjective:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bro
Limited
Hub

*/

let rand = Math.random();
let first, second, third;

// Lets generate the first word
if (rand < 0.66) {
    first = 'Crazy'
} else if (rand < 0.66 && rand >= 0.33) {
    first = 'Amazing'
} else {
    first = 'Fire'
}

// Lets generate the second word
rand = Math.random();
if (rand < 0.66) {
    second = 'Engine'
} else if (rand < 0.66 && rand >= 0.33) {
    second = 'Foods'
} else {
    second = 'Germents'
}

// Lets generate the third word
rand = Math.random();
if (rand < 0.66) {
    third = 'Bro'
} else if (rand < 0.66 && rand >= 0.33) {
    third = 'Limited'
} else {
    third = 'Hub'
}

console.log(`${first} ${second} ${third}`)