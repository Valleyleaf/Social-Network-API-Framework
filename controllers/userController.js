const {User} = require('../models/')

console.log('Testing: Hit userController')

const userController = {
  // Get all Users
  async getUsers(req, res) {
    try {
      const usersVAR = await User.find();
      res.json(usersVAR);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a single User by ID
  async getSingleUser(req, res) {
    try {
      const usersVAR = await User.findOne({ _id: req.params.usersVARId })
        .select('-__v');
      if (!usersVAR) {
        return res.status(404).json({ message: 'No User with that ID' });
      }
      res.json(usersVAR);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a User
  async createUser(req, res) {
    try {
      const usersVAR = await User.create(req.body);
      res.json(usersVAR);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

    // Update a User
    async updateUser(req, res) {
        try {
          const usersVAR = await User.findOneAndUpdate(
            { _id: req.params.UserId },
            { $set: req.body },
            { runValidators: true, new: true }
          );
          if (!usersVAR) {
            return res.status(404).json({ message: 'No User with this id!' });
          }
          res.json(usersVAR);
        } catch (err) {
          res.status(500).json(err);
        }
      },

  // Delete a User
  async deleteUser(req, res) {
    try {
      const usersVAR = await User.findOneAndDelete({ _id: req.params.usersVARId });

      if (!user) {
        return res.status(404).json({ message: 'No User with that ID' });
      }
      await User.deleteMany({ _id: { $in: usersVAR.thoughts } });
      res.json({ message: 'User and thoughts deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteFriend(req, res) {
    try {
        const friend = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId }},
            { new: true }
        );

        if (!friend) {
            return res.status(404).json({ message: 'friend ID not matching any user ID'});
        }
        res.json(friend);
    } catch(err) {
      console.log(err)
        res.status(500).json(err)
    }
},


};


// Also need to add a FriendList creation function here. Build when other functions work.

module.exports = userController