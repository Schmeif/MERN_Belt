const PetsController = require('../controllers/pet.controller')

module.exports = (app) => {

    app.post('/api/createPet', PetsController.createPet)


    app.get('/api/getPets', PetsController.getPets)


    app.get('/api/getOnePet/:id', PetsController.getOnePet)


    app.put('/api/updatePet/:id', PetsController.updatePet)


    app.delete('/api/deletePet/:id', PetsController.deletePet)
}