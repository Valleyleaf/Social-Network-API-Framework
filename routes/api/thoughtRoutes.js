const router = require('express').Router();

const {getThoughts, getOneThought, createThought, updateThought, deleteThought, deleteBoth, deleteReaction} = require('../../controllers/throughtController');

// console.log('hit thought.js in API')

router.route('/').get(getUsers).post(createUser);

router.route('/userID').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(updateFriend).put(updateFriend).delete(updateFriend);

module.exports = router;

module.exports = router;


// Has this been tested: [X]
