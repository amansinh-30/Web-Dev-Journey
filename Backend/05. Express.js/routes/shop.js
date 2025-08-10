const express = require('express');
const router = express.Router();

// router.use((req, res, next )=>{
//     console.log('Time: ', Date.now());
//   next();  
// })

// Define the home page route
router.get('/', (req, res) => {
    res.send('Shop Home Page. ')
})
router.get('/:shopping', (req, res) => {
    res.send('Shopping Cart!! ')
})

// Define the blog post page route with {:}slug
router.get('/shopping/:slug', (req, res) => {
    res.send(`Fetch the Shopping Store for ${req.params.slug}`)
})

module.exports = router;