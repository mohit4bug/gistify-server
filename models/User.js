const { Schema, model } = require('mongoose')


const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    gists: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Gist'
        }
    ]
})

module.exports = model('User', schema)