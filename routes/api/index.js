const router = require('express').Router();
const userRoutes = require('./userRoutes');

console.log('hit index.js in API')

router.use('/courses', userRoutes);

module.exports = router;
