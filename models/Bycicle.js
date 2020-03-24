const mongoose = require( "mongoose");
const { Schema } = require( "mongoose");

const schema = new Schema(
    {
        title:{
            type:String
        },
        type:{
            type:String
        },
        price:{
            type:Number
        },
        isAvailable:{
            type:Boolean
        }, 
    }
);

schema.methods.toCarriageJSON = function toCarriageJSON() {
    return {
        title: this.title,
        type: this.type,
        price: this.price,
        isAvailable: this.isAvailable
    };
};


module.exports = mongoose.model("Bycicle", schema);
