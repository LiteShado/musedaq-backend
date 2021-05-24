const ratingRoutes = require('express').Router()
const ratingController = require('../controllers/ratingController')

ratingRoutes.get('/', ratingController.getAll)

module.exports = ratingRoutes
