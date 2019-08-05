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

        if(idMap instanceof Array){
            throw Error("Populate: was an array")
        }
        for(var property in idMap){
            if(property.includes('List')){
                let idList=idMap[property]
                let propertyLength=property.length
                let model=models[property.substring(0,propertyLength-4)]
                for(var i=0;i<idList.length;i++){
                    let doc=await model.findById(idList[i])
                    idList[i]=doc.toObject()
                }
                idMap[property]=idList
            }else{
                let model=models[property]
                let id=idMap[property]
                let result = await model.findById(id)
                idMap[property] = result.toObject()
            }
        }
        return idMap

    }
}
