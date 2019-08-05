const express = require('express');
const router = express.Router()
const populateApi = require('./populate')
const crudApi = require('./crud')
const Controllers = require('../controllers')


router.use('/populate', populateApi)

router.use('/actor', crudApi(Controllers.ActorController, express.Router()))
router.use('/genre', crudApi(Controllers.GenreController, express.Router()))
router.use('/content-rating', crudApi(Controllers.ContentRatingController, express.Router()))
router.use('/producer', crudApi(Controllers.ProducerController, express.Router()))

module.exports = router
