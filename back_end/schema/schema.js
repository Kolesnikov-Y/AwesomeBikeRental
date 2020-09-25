const { Schema, model } = require('mongoose'); 

const Bike = new Schema ({
    name: String, 
    type: String,
    isRental: {
        type: Boolean,
        default: false
    }
}) 

module.exports = model("Bike", Bike)
