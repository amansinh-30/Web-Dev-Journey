
document.querySelector('h1').onclick = function () {
    alert('Ohh, You clicked H1! ')
}

//           -->> 'addEventListener' <<--
const btn3 = document.querySelector('#v3');

// btn3.addEventListener('click', function() {})
btn3.addEventListener('mouseup', () => {
    alert('CLICKED!')
    btn3.style.backgroundColor = 'oklch(79.2% 0.209 151.711)'
})


function twist() {
    console.log('TWIST!');
}
function shout() {
    console.log('SHOUT !');
}

const tas = document.querySelector('#tas');
tas.addEventListener('click', () => {
    tas.style.backgroundColor = 'oklch(92.4% 0.12 95.746)';
    tas.addEventListener('click', twist, { once: true });
    tas.addEventListener('click', shout);
})



// # ==>> For BUTTONS CLICK ME  
const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');
// for (let button of buttons) {
//     button.addEventListener('click', function () {
//         button.style.backgroundColor = randomColor();
//     })
// }

// >>>> KEY FUNCTION USING "this" <<<<
for (let button of buttons) {
    button.addEventListener('click', colorise);
    console.log('Clicked!!')
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorise)
}

function colorise() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
    this.style.color = randomColor();
}

