const express = require('express');
const router = express.Router()
const PopulateController = require('../controllers/index').PopulateController

router.post('/map', PopulateController.populateIdMapCtrl )
router.post('/list', PopulateController.populateIdMapListCtrl )

module.exports=router