const mongoose = require('mongoose');

module.exports = {
    connection: mongoose.connect('mongodb://localhost:27017/details', { useNewUrlParser: true })
};