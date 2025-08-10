const express = require('express');
const router = express.Router();

// Middleware that is specif to this router
router.use((req, res, next )=>{
    console.log('Time: ', Date.now());
  next();  
})

// Define the home page route
router.get('/', (req, res) => {
    res.send('BLOG Home Page. ')
})
// Define the about page route
router.get('/about', (req, res) => {
    res.send('About Birds')
})
// Define the blog post page route with {:}slug
router.get('/blogpost/:slug', (req, res) => {
    res.send(`Fetch the blogpost for ${req.params.slug}`)
})

module.exports = router;