const populateService = require('./populate')
const CrudService = require('./crud')
const models = require('../models')
module.exports={
    PopulateService: populateService,
    GenreService: CrudService(models.genre),
    ActorService: CrudService(models.actor),
    ProducerService: CrudService(models.producer),
    ContentRating: CrudService(models.contentRating)
}