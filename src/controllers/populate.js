const PopulateService = require('../services/index').PopulateService

module.exports={
    populateIdMapCtrl: async function(req,res){        
        res.send( await PopulateService.populateIdMap(req.body) )
    },
    populateIdMapListCtrl: async function(req,res){        
        res.send( await PopulateService.populateIdMapList(req.body) )
    },
}