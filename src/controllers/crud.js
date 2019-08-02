const GenreService = require('../services').GenreService

module.exports = function(CrudService){
    return {
        getAllCtrl: async function (req, res) {
            res.send( await CrudService.getAll() )
        },
        getByIdCtrl: async function (req, res){
            res.send( await CrudService.getById(req.params.id))
        },
        insertCtrl: async function (req, res){
            res.send( await CrudService.insert(req.body))
        },
        deleteCtrl: async function(req, res){
            res.send( await CrudService.delete(req.params.id))
        }
    }
} 