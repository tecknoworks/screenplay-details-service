const mongoose = require('mongoose');

module.exports={
    Actor: mongoose.model('actor',{name: String})
}