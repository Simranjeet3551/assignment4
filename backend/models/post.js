const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    pass: {type: String, required: true}
});

module.exports = mongoose.model('loginData', postSchema);
