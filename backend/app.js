const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const carsRouter = require('./controllers/cars')
const fuelsRouter = require('./controllers/fuels')
const gearboxesRouter = require('./controllers/gearboxes')
const locationsRouter = require('./controllers/locations')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/cars', carsRouter)
app.use('/api/fuels', fuelsRouter)
app.use('/api/gearboxes', gearboxesRouter)
app.use('/api/locations', locationsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app