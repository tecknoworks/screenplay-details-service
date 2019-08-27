const express = require('express')
const bodyParser= require('body-parser')
const cors = require('cors')
const logger= require('morgan');

const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'));

const router = require('./api/index')

const connection=require('./loaders/mongoose');

const seeder=require('./seeders/index')

// seeder.seed()

app.use('/details', router)

app.listen(port, () => console.log(`Screenplay details a listening on port ${port}!`))