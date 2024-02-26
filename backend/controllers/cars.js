const carsRouter = require('express').Router()
const Car = require('../models/car')

/*carsRouter.get('/', async (request, response) => {
    Car.find({}).then(cars => {
      response.json(cars)
    })
  })*/

  carsRouter.get('/', async (request, response) => {
    const cars = await Car
    .find({})
    .populate('fuel', {type: 1})
    .populate('gearbox', {type: 1})
    .populate('location', {name: 1, district: 1})
    response.json(cars)
  })

carsRouter.post('/', (request, response, next) => {
    const body = request.body
  
    const car = new Car({
      brand: body.brand,
      model: body.model,
      year: body.year,
      number_of_seats: body.number_of_seats,
      number_of_doors: body.number_of_doors,
      daily_price: body.daily_price,
      fuel: body.fuel,
      mileage: body.mileage,
      description: body.description,
      air_conditioning: body.air_conditioning,
      gearbox: body.gearbox,
      location: body.location,
      rented: body.rented
    })
    
    car.save()
      .then(savedCar => {
        response.json(savedCar)
      })
      .catch(error => next(error))
  })
  
  module.exports = carsRouter