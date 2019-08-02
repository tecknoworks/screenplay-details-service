const mongoose = require('mongoose')

module.exports={
    Producer: mongoose.model('producer', {name: String})
}