const labelRoutes = require('express').Router()
const labelController = require('../controllers/labelController')


labelRoutes.post('/new', labelController.create)
labelRoutes.post('/mylabel', labelController.getOneLabel)
labelRoutes.post('/mylabels', labelController.getLabels)
labelRoutes.post('/mylabelname', labelController.getLabelName)
labelRoutes.post('/delete', labelController.delete)



module.exports = labelRoutes
