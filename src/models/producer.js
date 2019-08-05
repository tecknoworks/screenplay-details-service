const mongoose = require('mongoose')
const schemaBuilder = require('../../utils').schemaBuilder;

module.exports={
    Producer: mongoose.model('producer', schemaBuilder({name: String}))
}