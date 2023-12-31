const router = require('express').Router();
const {
    getUsers, 
    getSingleUser, 
    createUser, 
    updateUser, 
    deleteUser, 
    updateFriend
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userID')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

router.route("/:userId/friends/:friendId")
.post(updateFriend)
.put(updateFriend)
.delete(updateFriend);

module.exports = router;
