const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/courses', userRoutes);

module.exports = router;
