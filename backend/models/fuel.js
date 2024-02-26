const mongoose = require('mongoose')

const fuelSchema = new mongoose.Schema({
    type: String
})

fuelSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    //returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Fuel', fuelSchema)