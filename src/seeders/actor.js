const Actor = require('../models/actor').Actor

module.exports={
    seed: async function( ){
        await Actor.insertMany([
            {name: 'Morgan Freeman'},
            {name: 'Jason Statham'},
            {name: 'Steven Segal'},
            {name: 'Antonio Banderas'},
            {name: 'Bruce Willis'},
            {name: 'Jessica Alba'},
        ])
    }
}