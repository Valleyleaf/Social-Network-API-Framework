const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

console.log('hit index.js in API')

router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);

module.exports = router;

// Has this been tested: [X]