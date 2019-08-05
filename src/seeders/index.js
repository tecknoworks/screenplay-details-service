const genreSeeder = require('./genre')
const actorSeeder = require('./actor')
const contentRatingSeeder = require('./content-rating')
const producerSeeder = require('./producer')

module.exports={
    seed : async function(){
        await genreSeeder.seed()
        await actorSeeder.seed()
        await contentRatingSeeder.seed()
        await producerSeeder.seed()
    }
}