const Producer = require('../models/producer').Producer

module.exports={
    seed: async function(){
        await Producer.insertMany(
            [
                {name: 'George Lucas'},
                {name: 'Mel Brooks'},
                {name: 'Martin Scorsese'},
                {name: 'Steven Spielberg'},
            ]
        )
    }
}