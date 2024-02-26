const mongoose = require('mongoose')

const gearboxSchema = new mongoose.Schema({
    type: String
})

gearboxSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    //returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Gearbox', gearboxSchema)