module.exports=function(CrudController, router){
    router.get('/all', CrudController.getAllCtrl )
    router.get('/:id', CrudController.getByIdCtrl )
    router.post('/', CrudController.insertCtrl )
    router.delete('/:id', CrudController.deleteCtrl )
    return router
}