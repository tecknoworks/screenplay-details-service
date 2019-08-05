const mongoose = require('mongoose');
const schemaBuilder = require('../../utils').schemaBuilder;

module.exports={
    Actor: mongoose.model('actor', schemaBuilder({name: String}))
}