const router = require('express').Router();

const {getThoughts, getOneThought, createThought, updateThought, deleteThought} = require('../../controllers/throughtController');

// console.log('hit thought.js in API')

router.route('/').get(getThoughts).post(createThought);

router.route('/ThoughtID').get(getOneThought).put(updateThought).delete(deleteThought);

router.route("/:ThoughtId/friends/:friendId").post(updateThought).put(updateThought).delete(deleteThought);

module.exports = router;


// Has this been tested: [X]
