const models = require('../models/index')
module.exports = {
    populateIdMapList : async function(idMapList){
        var idMapList= Array.from(idMapList)
        
        for(var i=0; i<idMapList.length; i++){
            idMapList[i]=await this.populateIdMap(idMapList[i])
        }
        return idMapList
    },
    populateIdMap : async function(idMap){
        for(var property in idMap){
            idMap[property] = await models[property].findById(idMap[property])
        }
        return idMap
    }
}
