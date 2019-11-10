const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 150
    },
    email: {
        type: String,
        required: true,
        maxlength: 120
    },
    password: {
        type: String,
        required: true,
        maxlength: 12
    }
});

module.exports = model('User', UserSchema)