module.exports = function (Model) {
    return {
        getAll: async function () {
            return Model.find().lean()
        },
        getById: async function (id) {
            return Model.findById(id).lean()
        },
        insert: async function (ModelMap) {
            return Model.create(ModelMap).lean()
        },
        delete: async function (id) {
            return Model.findByIdAndDelete(id)
        }
    }
}
