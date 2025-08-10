import fs from "fs/promises"

let read = await fs.readFile('Jack.txt')
console.log(read.toString());

let apex = await fs.readFile('Apex.txt');
console.log(apex.toString());
