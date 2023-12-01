const {Thoughts} = require('../models/')

console.log('Testing: Hit thoughtController')

const thoughtController = {
  async getThoughts(req, res) {
    try {
      const thoughtVAR = await Thoughts.find();
      res.json(thoughtVAR);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getOneThought(req, res) {
    try{
        const thoughtVAR = await Thoughts.findOne({_id: req.params.thoughtId}).select('-__v');
        if (!thoughtVAR){
            return res.status(404).json({message: 'Unable to find thought with that ID'});
        }
    }
  }

}

// getOneThought
// createThought
// updateThought
// deleteThought
// deleteThought+Reaction
// deleteReaction

module.exports = thoughtController