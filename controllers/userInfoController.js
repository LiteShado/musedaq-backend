require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const models = require('../models')


const  userInfoController ={}

userInfoController.create = async (req, res) => {
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)

        const user = await models.userInfo.create({
            email: req.body.email,
            password: hashedPassword,
            name: req.body.name
        })

        const encryptedId = jwt.sign({ userId: user.id}, process.env.JWT_SECRET)


        res.json({user, message: 'user created', userId: encryptedId})
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message})
    }
}

userInfoController.login = async(req, res) => {
    try {
      const user = await models.userInfo.findOne({
        where: {
            email: req.body.email
        }
      })

      if (bcrypt.compareSync(req.body.password, user.password)) {
        const encryptedId = jwt.sign({ userId: user.id}, process.env.JWT_SECRET)

        res.json({ user, message: 'login successful', userId:encryptedId })
      } else {
        res.status(401).json({ message: 'login failed' })
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message })
    }
  }


  userInfoController.verifyUser = async (req, res) => {
    try {
      const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

      const user = await models.userInfo.findOne({
        where: {

          id: decryptedId.userId
        }
      })

      if (user) {
        res.json({user, message:'user found'})
      }else {
        res.status(404).json({message: 'user not found'})
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({error: error.message})
    }
  }

  userInfoController.getLabel = async (req, res) => {
    try {

      const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

      const user = await models.userInfo.findOne({
        where: {
          id: decryptedId.userId
        }
      })

      const signedArtist = await userInfo.getArtists()

      res.json(user, signedArtist)
    } catch (error) {
      res.json(error)
    }
  }

  userInfoController.delete =async (req,res) => {
    try {
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        const user = await models.userInfo.findOne({
      where: {
        id: decryptedId.userId
      }
    })

      const deleteFromLabel = await models.label.destroy({
            where:{
                labelId: req.params.id
            }
        })

        res.json({user, deleteFromLabel})
    } catch (error) {
        res.json({error: error.message})
    }
}

  module.exports = userController
