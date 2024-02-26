const gearboxesRouter = require('express').Router()
const Gearbox = require('../models/gearbox')

gearboxesRouter.post('/', (request, response, next) => {
  const body = request.body

  const gearbox = new Gearbox({
    type: body.type,
  })
  
  gearbox.save()
    .then(savedGearbox => {
      response.json(savedGearbox)
    })
    .catch(error => next(error))
})

module.exports = gearboxesRouter