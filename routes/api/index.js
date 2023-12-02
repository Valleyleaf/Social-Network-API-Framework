const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

console.log('hit index.js in API')

router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  //Adding error handling.

module.exports = router;

// Has this been tested: [X]