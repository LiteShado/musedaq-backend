const genreRoutes = require('express').Router()
const genreController = require('../controllers/genreController')

genreRoutes.get('/', genreController.getAll)

genreRoutes.get('/search', genreController.getOne)

module.exports = genreRoutes
