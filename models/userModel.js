const mongoose = require('mongoose');
const userSchema =require('../schemas/usersSchemas');

const users = mongoose.model('users', userSchema);

module.exports = users
