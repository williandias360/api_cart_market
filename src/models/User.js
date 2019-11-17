const { Schema, model } = require('../database');


const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 150
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 120,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        maxlength: 12,
        select: false
    }
}, {
    timestamps: true
});

module.exports = model('User', UserSchema)