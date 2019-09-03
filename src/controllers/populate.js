const PopulateService = require('../services/index').PopulateService

module.exports={
    populateIdMapCtrl: async function(req,res){      
        try {
            var movieDetails = await PopulateService.populateIdMap(req.body)

            res.send(movieDetails)
        } catch (error) {
            res.send(error.message)
        }  
       
    },
    populateIdMapListCtrl: async function(req,res){      
        try {
            var moviesDetails = await  PopulateService.populateIdMapList(req.body)
            res.send( moviesDetails )
        } catch (error) {
            res.send(error.message)
        }  
    },
}