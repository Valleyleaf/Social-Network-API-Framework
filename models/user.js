const { Schema, model} = require('mongoose');
const Thoughts = require('./Thoughts')


const UserSchema = new Schema(
{
    // Add items
    // Tie Reactions and thoughts to this. Then for Thoughts, tie reactions to it.
    userName: {
        type: String,
        unique: true,
        required: true,
        maxlength: 50,
        trimmed: true,
    },
    email: {
        type: String,
        required: true,
        maxlength: 50,
        // Add Mongoose matching validation here.
    },
    thoughts: {
        _id:[{ type: Schema.Types.ObjectId, ref: 'Thoughts' }]
    },
    friends: {
        _id:[{ type: Schema.Types.ObjectId, ref: 'User' }]
    }
}
);

const User = model('User', UserSchema)

module.exports = User;
