const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('Public'))

app.get('/', (req, res) => {
    console.log('Hey, THIS IS A GET REQUEST!');
    res.send(`<h1>HELLO, THIS IS A GET REQUEST</h1>`)
}).post('/', (req, res) => {
    console.log('Hey, THIS IS A POST REQUEST!');
    res.send(`HELLO, THIS IS A POST REQUEST`)
}).put('/', (req, res) => {
    console.log('Hey, THIS IS A PUT REQUEST!');
    res.send(`HELLO, THIS IS A PUT REQUEST`)
}).delete('/', (req, res) => {
    console.log('Hey, THIS IS A DELETE REQUEST!');
    res.send(`HELLO, THIS IS A DELETE REQUEST`)
})

app.get('/index', (req, res) => {
    console.log('Hey Its INDEX!');
    res.sendFile('Templates/index.html', { root: __dirname })
})

app.get('/api', (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, e: 5, names: ["Apex", "Jack", 'JohnWick'] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})