const artistRoutes = require('express').Router()
const artistController = require('../controllers/artistController')


artistRoutes.get('/', artistController.getAll)
artistRoutes.get('/:id', artistController.getOne)
artistRoutes.put('/signed', artistController.signArtist)



module.exports = artistRoutes
