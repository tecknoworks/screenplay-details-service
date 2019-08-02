const mongoose = require('mongoose')

module.exports = {
    ContentRating: mongoose.model('contentRating', {rating: String, description:String})
}