const models = require('../models/index')
module.exports = {
    populateIdMapList : async function(screenplaysDetails){
        try { 
            for(key in screenplaysDetails){
                
                for(property in screenplaysDetails[key]){
                    
                    if(property.includes('List')){
                        let idList=screenplaysDetails[key][property]
                        let propertyLength=property.length
                        let model=models[property.substring(0,propertyLength-4)]
                        for(var i=0;i<idList.length;i++){
                            let doc=await model.findById(idList[i])
                            idList[i]=doc.toObject()
                        }
                        screenplaysDetails[key][property]=idList
                        
                    }else{

                        let model=models[property]
                        let id=screenplaysDetails[key][property]
                        let result = await model.findById(id)
                        screenplaysDetails[key][property] = result.toObject()

                    }
                }
            }
            return screenplaysDetails;
        } catch (error) {
            console.log(error);
            return
        }
        
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
