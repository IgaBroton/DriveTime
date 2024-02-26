const fuelsRouter = require('express').Router()
const Fuel = require('../models/fuel')

fuelsRouter.post('/', (request, response, next) => {
  const body = request.body

  const fuel = new Fuel({
    type: body.type,
  })
  
  fuel.save()
    .then(savedFuel => {
      response.json(savedFuel)
    })
    .catch(error => next(error))
})

module.exports = fuelsRouter