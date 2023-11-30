const { Schema, model} = require('mongoose');
const Thoughts = require('./Thoughts')
import { isEmail } from 'validator';

console.log('user model activated')


const UserSchema = new Schema(
{
    userName: {
        type: String,
        unique: true,
        required: true,
        maxlength: 50,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        maxlength: 50,
        validate: [ isEmail, 'invalid email' ]
        
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
  }
);

userSchema.virtual('userFriends').get(function() {
    return this.userFriends.length;
});
//Fix controllers and then check if this works.

const User = model('User', UserSchema)

module.exports = User;


// Has this been tested: []