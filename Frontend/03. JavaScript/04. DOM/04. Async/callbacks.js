console.log('I would print FIRST')


// >>>> CALLSTACK <<<<
// const multiply = (x, y) => x * y;

// const square = (x) => x * x;

// const isRightTringle = (x, y, z) => (
//     square(x) + square(y) === square(z)
// )
// console.log("Beforeeee!!")
// isRightTringle(3, 4, 5)

// console.log("DONEEEE!!!!!")

// >>>> CALLBACKS <<<<
setTimeout(() => {
    console.log("Data transfer successfully.")
}, 4000);

console.log("Ready to count down 4 Sec.")

// document.body.style.backgroundColor = 'skyblue'

// >>>> Nesting Callbacks <<<<

setTimeout(() => {
    document.body.style.backgroundColor = 'red'
    setTimeout(() => {
        document.body.style.backgroundColor = 'orange'
        setTimeout(() => {
            document.body.style.backgroundColor = 'skyblue'
            setTimeout(() => {
                document.body.style.backgroundColor = 'yellowgreen'
                setTimeout(() => {
                    document.body.style.backgroundColor = 'purple'
                    setTimeout(() => {
                        document.body.style.backgroundColor = 'pink'
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);

}, 1000);


const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}


const delayColor = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor
        doNext()
    }, delay);
}

delayColor(randomColor(), 1000, () => {
    console.log("INSIDE CALLBACK!")
})
delayColor(randomColor(), 2000)
delayColor(randomColor(), 3000)
delayColor(randomColor(), 4000)
delayColor(randomColor(), 5000)
delayColor(randomColor(), 7000)



// >>>> callback hell:( <<<<
searchMovieAPI('amadeus', () => {
        saveToDB(movie, () => {
            // if it works, run this
        }, () => {
            // if it doesn't work, run this:
        })
}, () => {
    // if API is down, or request failed
})