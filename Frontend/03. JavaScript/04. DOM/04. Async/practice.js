// const delayColor = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//         }, delay);
//         resolve(color.key)
//     })
// }

// delayColor('plum', 1000)
// .then(() => delayColor('orange', 2000))
// .then(() => delayColor('skyblue', 3000))
// .then(() => delayColor('olive', 4000))
// .then(() => delayColor('yellow', 5000))
// .then(() => delayColor('indigo', 6000))
// .then(() => delayColor('violet', 7000))

function randomColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}

setInterval(() => {
    document.body.style.backgroundColor = randomColor()
}, 2000);