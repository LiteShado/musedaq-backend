const genreRoutes = require('express').Router()
const genreController = require('../controllers/genreController')

genreRoutes.get('/', genreController.getAll)

module.exports = genreRoutes
