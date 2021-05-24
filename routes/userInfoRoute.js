const userInfoRoutes = require('express').Router()
const userInfoController = require('../controllers/userInfoController')


userInfoRoutes.post('/', userInfoController.create)
userInfoRoutes.post('/login', userInfoController.login)
userInfoRoutes.get('/verify', userInfoController.verifyUser)
userInfoRoutes.get('/label', userInfoController.getLabel)
userInfoRoutes.delete('/label/:id', userInfoController.delete)


module.exports = userInfoRoutes
