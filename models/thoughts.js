const { Schema, model} = require('mongoose');


const ThoughtsSchema = new Schema(
{
    thoughtText: {
        type: String,
        unique: true,
        required: true,
        minlength: 1,
        maxlength: 280,
        trimmed: true,
    },

}
);

const Thoughts = model('Thoughts', ThoughtsSchema)

module.exports = Thoughts;



// Has this been tested: []