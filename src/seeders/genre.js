const Genre = require('../models/genre').Genre
 
module.exports={
    seed: async function(){
        await Genre.deleteMany()
        await Genre.insertMany([
            {name: "Action"},
            {name: "Drama"},
            {name: "Thriller"},
            {name: "Comdedy"},
        ])
    }
}