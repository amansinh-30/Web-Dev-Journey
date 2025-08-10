const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    // res.send('HELLO, BACKEND DEVELOPER. HERE, YOUR GET REQUEST!')
    res.render('home')
})

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', { num })
})

app.listen(port, () => {
    console.log(`EXAMPLE IS LISTENING PORT: ${port}`);
})