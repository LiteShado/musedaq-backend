const artistRoutes = require('express').Router()
const artistController = require('../controllers/artistController')


artistRoutes.get('/', artistController.getAllArtists)
artistRoutes.get('/:id', artistController.getOneArtist)
artistRoutes.post('/:id', artistController.save)



module.exports = artistRoutes
