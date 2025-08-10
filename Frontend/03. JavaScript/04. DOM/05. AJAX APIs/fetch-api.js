// TO CHECK API IS WORKING OR NOT.
//  fetch(" API URL ")
    // .then(response => {
    //     console.log('Status CODE:');
    //     console.log("Status Code:", response.status); // e.g. 200, 404, etc.
    //     return response.json(); // Convert the response to JSON
    // })
    // .then(data => {
    //     console.log('RESPONSE DATA');
    //     console.log("Response Data:", data); // The actual API response
    // })
    // .catch(error => {
    //     console.log('API ERROR');
    //     console.error("API Error:", error); // Any connection or fetch errors
    // });





// fetch("https://swapi.info/api/films")
//     .then((res) => {
//         console.log("Resolved", res);
//         res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch("https://swapi.info/api/films");
//     })
//     .then((res) => {
//         console.log('SECOND REQUEST RESOLVED!!');
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch("https://swapi.info/api/films/");
//     })
//     .catch((err) => {
//         console.log("ERROR!!", err);
//     })

// loadStarWarsPeople()



const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.info/api/films");
        const data = await res.json()
        console.log(data);
        const res2 = await fetch("https://swapi.info/api/films");
        const data2 = await res2.json()
        console.log(data2);
    } catch (err) {
        console.log('ERROR!!', err);
    }
};

loadStarWarsPeople();