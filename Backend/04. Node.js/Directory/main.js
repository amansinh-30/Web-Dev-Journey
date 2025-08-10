// const { error } = require('console');
// const fs = require('fs/promises')
import fs from 'fs/promises'
// console.log(fs);


console.log('Starting');

// fs.writeFileSync('Apex.txt', "Hello Coder's, I hope you are doing well.")
// fs.writeFile('Apex.txt', "Hello Coder's, I hope you are doing well.", () => {
//     console.log('Done');
//     fs.readFile('Jack.txt', (err, data) => {
//         console.log(err,data);
//     })
// })


fs.appendFile('Jack.txt', 'JACK-REACHER', (e, d) => {
    console.log(d);
})
console.log('Ending');

let read = await fs.readFile('Jack.txt');
console.log(read.toString());
