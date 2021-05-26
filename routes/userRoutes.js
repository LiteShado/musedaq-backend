const userRoutes = require('express').Router()
const userController = require('../controllers/userController')


userRoutes.post('/signup', userController.create)
userRoutes.post('/login', userController.login)
userRoutes.put('/edit',userController.update)
userRoutes.get('/verify', userController.verifyUser)


module.exports = userRoutes
