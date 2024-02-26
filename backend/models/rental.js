const mongoose = require('mongoose')

const rentalSchema = new mongoose.Schema({
    start_date: Date,
    end_date: Date,
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    price: Number
})

rentalSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    //returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Rental', rentalSchema)