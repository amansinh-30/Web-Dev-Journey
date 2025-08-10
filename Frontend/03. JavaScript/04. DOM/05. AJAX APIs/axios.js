// "https://swapi.info/api/films"

// use "axios.get" to get request from API:
// axios.get("https://swapi.info/api/films")
//     .then((res) => {
//         console.log('RESOLVED', res);
//     })
//     .catch((err) => {
//         console.log('ERROR!!', err);
//     })

// Use async function to find data from the API:
const getStarWarsPerson = async () => {
    try {
        const res = await axios.get(`https://swapi.info/api/films`)
        console.log(res.data);
        // return res.data.title
    } catch (err) {
        console.log('ERROR!!', err);
    }
}
getStarWarsPerson(2);


// Create a Random Joke Generator
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');
// button.addEventListener('click', )

const addNewJoke = async () => {
    const jokeText = await getJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getJoke = async () => {
    try {
        const config = { Headers: { Accept: "application/json" } };
        const res = await axios.get("https://official-joke-api.appspot.com/random_joke", config)
        return `${res.data.punchline} ${res.data.setup}`;
    }
    catch (e) {
        return "No Joke Available SORRY :( "
    }
}
button.addEventListener('click', addNewJoke)