const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const port = 3001

app.use(bodyParser.json())

const router = require('./src/api/index')

const connection=require('./src/loaders/mongoose');

const seeder=require('./src/seeders/index')

// seeder.seed()

app.use('/details', router)

app.listen(port, () => console.log(`Screenplay details a listening on port ${port}!`))