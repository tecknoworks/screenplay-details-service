const mongoose = require('mongoose')
const schemaBuilder = require('../../utils').schemaBuilder;

module.exports = {
    ContentRating: mongoose.model('contentRating', schemaBuilder({rating: String, description:String}))
}