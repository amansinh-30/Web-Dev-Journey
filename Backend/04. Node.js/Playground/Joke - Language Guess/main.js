// To import modules 
const franc = require('franc');
const langs = require("langs");
const colors = require("colors");

// Get input
const input = process.argv[2];
const langCode = franc(input);

// Get language name 
if (langCode === 'und') {
    console.log("SORRY, COULDN'T FIGURE IT OUT, TRY WITH MORE SAMPLE TEXT!".red);
}
else {
    const language = langs.where('3', langCode);
    console.log(language.name.green);
}

// To get Joke
const jokes = require('give-me-a-joke');

// For Random Joke with Rainbow color Text
jokes.getRandomDadJoke(function (joke) {
    // console.log(`Here's your JOKE: ${joke.rainbow}`);
    console.log(`Here's your JOKE: ${joke.rainbow}`);
})
// console.log(colors);