const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('WE GOT A NEW REQUEST.');
//     // console.dir(req);
//     // res.send('HELLO, WE GOT YOUR REQUEST. THIS IS THE RESPONSE!!')
//     res.send("<h1>Hello Coder's</h1>")
// })

app.listen(8080, () => {
    console.log('LISTENING ON PORT 8080');
})

app.get('/chicken', (req, res) => {
    console.log('CHICKEN REQUEST!');
    res.send('EGGS!!')
})

app.post('/chicken', (req, res) => {
    res.send('THIS IS POST REQUEST FOR /chicken!!!!, THIS IS DIFFERENT THAN THE GET REQUEST.');
})

app.get('/', (req, res) => {
    res.send('WELCOME TO HOME PAGE!!!!');
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND, IF NOTHING SEARCH!!')
    }
    res.send(`Your search: ${q}`)
})

// app.get('*', (req, res) => {
//     res.send("I DON'T KNOW THAT PATH!!");
// })

app.get('/r/:subreddit/:postID', (req, res) => {
    const { subreddit, postID } = req.params;
    res.send(`<h1>Viewing the:${postID} to the ${subreddit} subreddit!!`);
})