const userRoutes = require('express').Router()
const userController = require('../controllers/userController')


userRoutes.post('/signup', userController.create)
userRoutes.post('/login', userController.login)
userRoutes.put('/edit',userController.update)
userRoutes.post('/verify', userController.verifyUser)
userRoutes.post('/profile', userController.getMe)
userRoutes.delete('/delete', userController.delete)


module.exports = userRoutes
