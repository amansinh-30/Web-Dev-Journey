const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const blog = require('./routes/blog')
const shop = require('./routes/shop')

app.use('/blog', blog)
app.use('/shop', shop)

// Middleware 1 - Logger for our application
app.use((req, res, next) => {
    console.log(req.header);
    req.apex = "This is Apex";
    fs.appendFileSync('Logs.txt', `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`);
    next();
})

// Middleware 2 
app.use((req, res, next) => {
    console.log('MIDDLEWARE 2');
    next();
})

app.get('/', (req, res) => {
    res.send('THIS IS A GET REQUEST.')
})

app.get('/about', (req, res) => {
    res.send('THIS IS ABOUT PAGE.')
})

app.get('/contact', (req, res) => {
    res.send('THIS IS CONTACT PAGE.')
})

app.listen(port, () => {
    console.log(`EXAMPLE APP LISTENING ON PORT ${port}`);
})