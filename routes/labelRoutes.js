const labelRoutes = require('express').Router()
const labelController = require('../controllers/labelController')


labelRoutes.post('/new', labelController.create)
labelRoutes.get('/mylabel', labelController.getOneLabel)
labelRoutes.get('/mylabels', labelController.getLabels)
labelRoutes.delete('/delete/:id', labelController.delete)



module.exports = labelRoutes
