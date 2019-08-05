const PopulateService = require('../services/index').PopulateService

module.exports={
    populateIdMapCtrl: async function(req,res){      
        try {
            res.send( await PopulateService.populateIdMap(req.body) )
        } catch (error) {
            res.send(error.message)
        }  
       
    },
    populateIdMapListCtrl: async function(req,res){      
        try {
            res.send( await PopulateService.populateIdMapList(req.body) )
        } catch (error) {
            res.send(error.message)
        }  
    },
}