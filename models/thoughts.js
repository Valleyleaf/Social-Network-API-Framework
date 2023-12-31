const { Schema, model} = require('mongoose');
const reactions = require('./Reactions')
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
        trim: true,
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
},
{
    toJSON: {
        getters: true,
        virtuals: true,
    },
});

ThoughtsSchema.virtual('userFriends').get(function() {
    console.log('userFriend virtual hit')
    return this.reactions.length;
});
// Copied from user.js. Fix controllers and then check if this works.

const Thoughts = model('Thoughts', ThoughtsSchema)

module.exports = Thoughts;



// Has this been tested: []