/* 
// Create a function where usr can enter the name recive by alerrt and usr will get back message with alert.
// create new Prototype
String.prototype.greeting = function() {
   alert(`Hello ${this},\nWelcome to CodeX Family.`)
}
// create a function to take input from user.
async function usr() {
   let usrname = prompt('Enter your good name:');
   usrname.greeting();
}
usr();   // calling a function
*/

// ______________________________________________________________________
//                     Object Oriented Programming
// ______________________________________________________________________

/*
const navColor = new Color('carrot', [255, 126, 34]);
const logoColor = new Color('emerald', [46, 204, 113]);

// document.querySelectorAll('h2')[0].style.backgroundColor = navColor.rgb();

// "rgb(244, 54, 23)"
// "rgba(244, 54, 23, 0.9)"
// "#76FF32"
// "hsl(180,50%,30%)"

// const req = XMLHttpRequest();
*/
// ______________________________________________________________________
//                           Factory Function
// ______________________________________________________________________

//              xxxx------- Color Code Generator -------xxxx

function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


function rgb(r, g, b) {
    return `rgb(${r}, ${b}, ${g})`
}

function makeColor(r, g, b) {
    // build a object or a factory which helps to makeColor function to run
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function () {
        const { r, g, b } = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    };

    return color;          //to run this factory or object
}

const firstColor = makeColor(155, 93, 229)
// firstColor.rgb()
firstColor.hex();





