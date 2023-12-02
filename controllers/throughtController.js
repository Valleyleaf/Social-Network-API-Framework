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
    }catch(err){
     res.json(err);
    }
  },
  async createThought(req, res) {
    try {
      const ThoughtsVAR = await Thought.create(req.body);
      res.json(ThoughtsVAR);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

    async updateThought(req, res) {
        try {
          const ThoughtsVAR = await Thought.findOneAndUpdate(
            { _id: req.params.ThoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
          );
          if (!ThoughtsVAR) {
            return res.status(404).json({ message: 'No Thought with this id!' });
          }
          res.json(ThoughtsVAR);
        } catch (err) {
          res.status(500).json(err);
        }
      },

  async deleteThought(req, res) {
    try {
      const ThoughtsVAR = await Thought.findOneAndDelete({ _id: req.params.ThoughtsVARId });

      if (!Thought) {
        return res.status(404).json({ message: 'No Thought with that ID' });
      }
      await Thought.deleteMany({ _id: { $in: ThoughtsVAR.thoughts } });
      res.json({ message: 'Thought and thoughts deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
}

module.exports = thoughtController
