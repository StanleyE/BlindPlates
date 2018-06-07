const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// user schema
const userSchema = Schema({
        first_name: {
            type: String, 
            required: true
            },
        last_name: {
            type: String,
            required: true
            },
        nickname: String,
        dob: {
            type: Date,
            required: true
            },
        gender: {
            type: String,
            required: true
            },
        coords: {
            index: '2dsphere',
            type: [Number]
        },
        phone_number: String,
        date_created: {
            type: Number, 
            default: Date.now,
            required: true
        }
}); 
const User = mongoose.model('User', userSchema);
module.exports = User;
