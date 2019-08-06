const mongoose = require('mongoose')
const schemaBuilder = require('../helpers/utils').schemaBuilder;

module.exports={
    Producer: mongoose.model('producer', schemaBuilder({name: String}))
}