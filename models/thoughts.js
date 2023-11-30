const { Schema, model} = require('mongoose');
const reactions = require('add later')
const dayjs = require('dayjs');

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
        type: Date,
        default: Date.now,
        get: (date) => {
            if (date) 
                return dayjs(date).format('MMMM DD, YYYY') + ' at ' + dayjs(date).format('h:m a');
        },
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