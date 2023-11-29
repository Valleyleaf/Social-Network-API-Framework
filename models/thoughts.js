const { Schema, model} = require('mongoose');
const reactions = require('add later')

console.log('thought model activated')

const ThoughtsSchema = new Schema(
{
    thoughtText: {
        type: String,
        unique: true,
        required: true,
        minlength: 1,
        maxlength: 280,
        trimmed: true,
        //This should be fine.
    },
    createdAt: {
        //Date
        //Set default value to the current timestamp
        //Use a getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactions]
    //Dunno if this is right
}
);
//Need to track date somehow.


const Thoughts = model('Thoughts', ThoughtsSchema)

module.exports = Thoughts;



// Has this been tested: []