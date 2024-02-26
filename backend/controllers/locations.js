const locationsRouter = require('express').Router()
const Location = require('../models/location')

locationsRouter.post('/', (request, response, next) => {
  const body = request.body

  const location = new Location({
    name: body.name,
    district: body.district
  })
  
  location.save()
    .then(savedLocation => {
      response.json(savedLocation)
    })
    .catch(error => next(error))
})

module.exports = locationsRouter