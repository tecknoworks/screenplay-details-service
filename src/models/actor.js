const mongoose = require('mongoose');
const schemaBuilder = require('../helpers/utils').schemaBuilder;

module.exports={
    Actor: mongoose.model('actor', schemaBuilder({name: String}))
}