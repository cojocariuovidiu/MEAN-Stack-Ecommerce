const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: {type: Number, index: true, unique: true},
    token: String,
    name: String,
    gender: String,
    email: {type: String, index: true, unique: true},
    picture: String,
    locale:String,
    link:String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;