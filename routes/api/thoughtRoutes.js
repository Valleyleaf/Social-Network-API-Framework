const router = require('express').Router();

const {getThoughts, getOneThought, createThought, updateThought, deleteThought, deleteBoth, deleteReaction} = require('../../controllers/throughtController');

// console.log('hit thought.js in API')

router.route('/').get(getThoughts).post(createThought);

router.route('/ThoughtID').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route("/:ThoughtId/friends/:friendId").post(updateFriend).put(updateFriend).delete(updateFriend);

module.exports = router;

module.exports = router;


// Has this been tested: [X]
