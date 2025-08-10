// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end("<h1>Hello Coder's\n</h1>");
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


const express = require('express');
const app = express();
const blog = require('./routes/blog')
const shop = require('./routes/shop')
const port = 3000;

// to public the file ('Folder Name')
app.use(express.static('Public'))
app.use('/blog', blog)
app.use('/shop', shop)

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send(`Hello Backend Developer`);
})

app.get('/about', (req, res) => {
    res.send('About me');
})

app.get('/contact', (req, res) => {
    res.send('Hey there, Contact here!');
})
app.get('/blog', (req, res) => {
    res.send('Hey there,Welcome to my Blog');
})
app.get('/blog/:slug', (req, res) => {
    //     // logic to fetch {slug} from database
    // For URL: http://127.0.0.1:3000/blog/javascript?mode=dark&region=in

    // res.params give the value after {:}
    console.log(req.params);    //will output {slug:javascript}

    // res.query give the value after {?}
    console.log(req.query);    //will output { mode = 'dark', region = 'in' }

    res.send(`Hello ${req.params.slug}`);
})

app.get('/blog/:slug/:second', (req, res) => {
    //     // logic to fetch {slug} from database
    res.send(`Hello ${req.params.slug} and ${req.params.second}`);
})

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from database
//     res.send('Blog no. 1: Intro about JavaScript.');
// })
// app.get('/blog/intro-to-python', (req, res) => {
//     res.send('Blog no. 1: Intro about Python.');
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}.`);
})