const labelRoutes = require('express').Router()
const labelController = require('../controllers/labelController')


labelRoutes.post('/', labelController.signArtist)
labelRoutes.post('/new', labelController.create)
labelRoutes.get('/', labelController.getAll)
labelRoutes.get('/:id', labelController.getOneLabel)



module.exports = labelRoutes
