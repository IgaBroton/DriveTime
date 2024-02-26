const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: Number,
  number_of_seats: Number,
  number_of_doors: Number,
  daily_price: Number,
  fuel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fuel'
  },
  mileage: Number, 
  description: String,
  air_conditioning: Boolean,
  gearbox: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gearbox'
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location'
  },
  rented: Boolean,
})

carSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    //returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Car', carSchema)