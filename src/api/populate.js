const express = require('express');
const router = express.Router()
const PopulateController = require('../controllers/index').PopulateController
const seed = require('../seeders').seed

router.post('/map', PopulateController.populateIdMapCtrl )
router.post('/list', PopulateController.populateIdMapListCtrl )
router.get('/seed', seed)

module.exports=router