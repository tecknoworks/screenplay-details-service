module.exports = function (Model) {
    return {
        getAll: async function () {
            let resultList = await Model.find()
            return resultList.map(doc => doc.toObject())
        },
        getById: async function (id) {
            let result = await Model.findById(id);
            return result.toObject();
        },
        insert: async function (ModelMap) {
            return Model.create(ModelMap)
        },
        delete: async function (id) {
            return Model.findByIdAndDelete(id)
        }
    }
}
