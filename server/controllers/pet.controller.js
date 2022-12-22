const Pets = require('../models/pets.model')

module.exports = {
    createPet:(req, res)=> {
        Pets.create(req.body)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    getPets:(req, res)=>{
        Pets.find()
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    getOnePet:(req, res) => {
        Pets.findOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    updatePet:(req, res) => {
        Pets.updateOne({_id:req.params.id}, req.body, {runValidators:true})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    deletePet:(req, res)=> {
        Pets.deleteOne({_id:req.params.id}, req.body)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    }
}