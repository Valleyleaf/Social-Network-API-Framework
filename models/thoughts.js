const { Schema, model} = require('mongoose');


const ThoughtsSchema = new Schema(
{
    item1: {
        type: String,
        unique: true,
        required: true,
        maxlength: 50,
        trimmed: true,
    },

}
);

const Thoughts = model('Thoughts', ThoughtsSchema)

module.exports = Thoughts;
