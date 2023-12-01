const router = require('express').Router();
const {getUsers, getSingleUser, createUser, updateUser, deleteUser} = require('../../controllers/userController');

console.log('hit user.js in API')

router.route('/').get(getUsers).post(createUser);

module.exports = router;

// Has this been tested: [X]