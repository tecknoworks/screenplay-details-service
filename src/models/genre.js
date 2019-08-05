const mongoose = require('mongoose')
const schemaBuilder = require('../../utils').schemaBuilder;

module.exports= {
    Genre: mongoose.model('genre', schemaBuilder({name:String}) )
}