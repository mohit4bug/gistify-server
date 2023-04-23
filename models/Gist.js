const { Schema, model } = require('mongoose')

const schema = new Schema({
    desc: {
        type: String,
    },
    lang: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Gist', schema)