console.log('This is PROMISE.');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.4) {
        reject('No random number was not supporting you.')
    }
    else {
        setTimeout(() => {
            console.log("Yess, I'm done");
            resolve("Jack")
        }, 2000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.4) {
        reject("No random number WASN'T supporting you.")
    }
    else {
        setTimeout(() => {
            console.log("Yess, I'm DONE");
            resolve("APEX")
        }, 2000);
    }
})



let promAll = Promise.all([[prom1, prom2]])
promAll.then((e) => {
    console.log(e);
}).catch((err) => {
    console.log(err);
})