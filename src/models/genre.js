const mongoose = require('mongoose')

module.exports= {
    Genre: mongoose.model('genre', new mongoose.Schema({name:String}) )
}