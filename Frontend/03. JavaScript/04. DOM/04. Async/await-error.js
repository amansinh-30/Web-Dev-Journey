
// // using "async function" to avoid error and pass throw the data without delay 
// const delayColor = async (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color
//         }, delay);
//         resolve(color)
//     })
// }

// // using 'await' is only useable in "async function" 
// async function rainbow() {
//     await delayColor('red', 1000);
//     await delayColor('orange', 2000);
//     await delayColor('yellow', 3000);
//     await delayColor('green', 4000);
//     await delayColor('blue', 5000);
//     await delayColor('indigo', 6000);
//     await delayColor('violet', 7000);
//     return 'All Done'
// }
// // rainbow().then(() => console.log('END OF RAINBOW!'));
// async function prinRainbow() {
//     await rainbow();
//     console.log('END OF THE RAINBOW');
// }
// prinRainbow()


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if(delay > 2000){
                reject('Connection Timeout..!!')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay);
    })
}

async function makeTwoRequest() {
    try{
        let data1 = await fakeRequest('/page1'); 
        console.log(data1);
        
        let data2 = await fakeRequest('/page2'); 
        console.log(data2);
    }
    catch(e){
        console.log('CAUGHT AN ERROR');
        console.log('Error is:', e);
    }
}

makeTwoRequest()