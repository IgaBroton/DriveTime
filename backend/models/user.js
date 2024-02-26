const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    surrname: String,
    username: String,
    email: String,
    password: String,
    rentals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rental'
    }]
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        //returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.password
    }
});

module.exports = mongoose.model('User', userSchema);