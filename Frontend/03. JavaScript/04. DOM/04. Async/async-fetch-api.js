
/*
-->> Note: 
Settle means resolve or reject.
Resolve means promise has settled successfully.
Reject means promise has not settled successfully.
*/
console.log('Promises and Fetch APIs');

// create a function for resolved data without delay process
async function getData() {
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            resolved(455)
        }, 3500);
    })
}

async function getData() {
    // using fetch APIs (Simulating data from a server):
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data);
    // .then(response => response.json())
    // .then(json => console.log(json))
}

async function main() {

    console.log('Loading Modules')
    console.log('Do something');

    console.log('Load Data');
    let data = await getData();

    console.log(data);
    console.log('Process Data');
    console.log('Task 2');
}

main()

// without using async function only using ".then":
// data.then((v) => {
//     console.log(data);

//     console.log('Process Data');
// })