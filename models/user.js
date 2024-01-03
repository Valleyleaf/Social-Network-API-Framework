const { Schema, model} = require('mongoose');
const Thoughts = require('./Thoughts')

const UserSchema = new Schema(
{
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    thoughts: {
        _id:[{ type: Schema.Types.ObjectId, ref: 'Thoughts' }]
    },
    friends: {
        _id:[{ type: Schema.Types.ObjectId, ref: 'User' }]
    },
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
}
);

UserSchema.virtual('userFriends').get(function() {
    return this.userFriends.length;
});

const User = model('User', UserSchema)

module.exports = User;


// Has this been tested: [X]