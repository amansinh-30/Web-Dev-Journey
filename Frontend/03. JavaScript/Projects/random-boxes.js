/*
Given 5 boxes, Assign a random color and a random background 
to each box using DOM concepts
*/

// function getRandom(){
//     const letters = '0123456789ABCDEF'
//     let color = '#'
//     for (let i = 0; i < 6; i++){
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// const boxes = document.querySelectorAll('.box');

// boxes.forEach(box => {
//     const textColor = getRandom();
//     const backgroundColor = getRandom();
//     const border = getRandom()
//     box.style.color = textColor;
//     box.style.backgroundColor = backgroundColor
//     box.style.border = border;
// })


// function getColor(){
//     let letters = '0123456789ABCDEFGHI'
//     let color = '#'
//     for(let i = 0; i < 6; i++){
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

function getRandomColor(){
    let r = Math.ceil(0 + Math.random() * 255);
    let g = Math.ceil(0 + Math.random() * 255);
    let b = Math.ceil(0 + Math.random() * 255);
    return `rgb(${r},${g},${b})`
}

const boxes = document.querySelectorAll('.box');

// boxes.forEach(box => {
//     const textColor = getColor();
//     const background = getColor();
//     const border = getColor();
//     box.style.color = textColor;
//     box.style.backgroundColor = background;
//     box.style.border = border;
// })


boxes.forEach(box => {
    const textColor = getRandomColor();
    const background = getRandomColor();
    const border = getRandomColor();
    box.style.color = textColor;
    box.style.backgroundColor = background;
    box.style.border = border;
})