// Will this be needed or will I subclass this?
const { Schema, model} = require('mongoose');
const dayjs = require('dayjs');

console.log('reactions model activated')

const ReactionsSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
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
            type: Date,
            default: Date.now,
            get: (date) => {
                if (date) 
                    return dayjs(date).format('MMMM DD, YYYY') + ' at ' + dayjs(date).format('h:m a');
            },
        },
    }
)

module.exports = ReactionsSchema;

// Has this been tested: []