const ratingRoutes = require('express').Router()
const ratingController = require('../controllers/ratingController')

// ratingRoutes.get('/', ratingController.getAll)

ratingRoutes.get('/search', ratingController.getOne)

module.exports = ratingRoutes
