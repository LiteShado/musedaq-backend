const artistRoutes = require('express').Router()
const artistController = require('../controllers/artistController')


artistRoutes.get('/', artistController.getAll)
artistRoutes.post('/roster', artistController.getSignedArtists)
artistRoutes.get('/:id', artistController.getOne)
artistRoutes.put('/signed', artistController.signArtist)
artistRoutes.put('/unsigned', artistController.signArtist)



module.exports = artistRoutes
