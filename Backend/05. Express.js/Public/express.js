// Express APP:

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.set(req.params)
})

app.listen(port, () => {
    console.log(`Example app listenin on port ${3000}`);
})