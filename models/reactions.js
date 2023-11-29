// Will this be needed or will I subclass this?
const { Schema, model} = require('mongoose');

console.log('reactions model activated')

const ReactionsSchema = new Schema(
    {
        reactionId: {
            //Finish this
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            //Add date
            //Set default value to the current timestamp
            //Use a getter method to format the timestamp on query
        }
    }
)