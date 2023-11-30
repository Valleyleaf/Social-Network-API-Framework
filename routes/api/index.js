const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

console.log('hit index.js in API')

router.use('/', userRoutes, thoughtRoutes);

module.exports = router;

// Has this been tested: [X]