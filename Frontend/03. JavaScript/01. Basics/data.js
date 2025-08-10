const subnames = ['Car', 'Money', 'Manssion', 'Clothes', 'Watches'];

for (sub of subnames) {
    console.log(sub);
}

console.log("-->> NEW LIST <<--")
// const seatingChart = [
//     ['Jack', 'Reacher', 'Jane'],
//     ['Amanda', 'Apex', 'Julia'],
//     ['John', 'Linda', 'Tom']
// ];

// for (i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// for (let row of seatingChart) {
//     for (let students of row) {
//         console.log(students);
//     }
// }


// for (whatSay of 'HELLO CODER') {
//     console.log(whatSay)
// }

const information = {
    Jack: 70,
    Reacher: 67,
    Jane: 82,
    Amanda: 90,
    Apex: 97,
    Julia: 94,
    John: 89,
    Tom: 84
};

// for (let person in information) {
//     console.log(`${person} scored is ${information[person]}%.`)
// }

let total = 0;
let scores = Object.values(information);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)