const populateController= require('./populate')
const CrudController = require('./crud')
const Services= require('../services')

module.exports={
    PopulateController: populateController,
    GenreController: CrudController(Services.GenreService),
    ActorController: CrudController(Services.ActorService),
    ContentRatingController: CrudController(Services.ContentRating),
    ProducerController: CrudController(Services.ProducerService)
}