const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    name: String,
    district: String
})

locationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    //returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Location', locationSchema)