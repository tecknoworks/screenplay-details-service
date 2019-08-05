
module.exports = function(CrudService){
    return {
        getAllCtrl: async function (req, res) {
            try {
                res.send( await CrudService.getAll() )
            } catch (error) {
                res.send(error.message)
            }
            
        },
        getByIdCtrl: async function (req, res){
            try {
                res.send( await CrudService.getById(req.params.id))
            } catch (error) {
                res.send(error.message)
            }
            
        },
        insertCtrl: async function (req, res){
            try {
                res.send( await CrudService.insert(req.body))
            } catch (error) {
                res.send(error.message)
            }
            
        },
        deleteCtrl: async function(req, res){
            try {
                res.send( await CrudService.delete(req.params.id))
            } catch (error) {
                res.send(error.message)
            }
            
        }
    }
} 