const mongoose = require ('mongoose')

const PetsSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Required "],
        minLength:[3,"Must be at least 3 characters in length"]
    },
    type:{
        type:String,
        required:[true,"Type Required "],
        minLength:[3,"Must be at least 3 characters in length"]
    },
    description:{
        type:String,
        required:[true,"Description Required "],
        minLength:[3,"Must be at least 3 characters in length"]
    },
    skill1:{
        type:String,
        required:[true,"Skills Required "],
        minLength:[3,"Must be at least 3 characters in length"]
    },
    skill2:{
        type:String,
        required:[true,"Skills Required "],
        minLength:[3,"Must be at least 3 characters in length"]
    },
    skill3:{
        type:String,
        required:[true,"Skills Required "],
        minLength:[3,"Must be at least 3 characters in length"]
    },
}, {timestamps:true})

const Pets = mongoose.model('Pets', PetsSchema)

module.exports = Pets