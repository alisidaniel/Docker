const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
},{
    timestamps: true
});

module.exports = moongose.model('User', userSchema);