require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const models = require('../models')


const  userController = {}

userController.create = async (req, res) => {
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)

        const user = await models.user.create({
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

userController.login = async(req, res) => {
    try {
      const user = await models.user.findOne({
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

userController.update = async (req,res) => {

  try {
      const user = await models.user.findOne({
          where:{
              email: req.body.email
            }
      })
      let final = await user.update(req.body)
      res.json({user, final})
  } catch (error) {
      res.json({error})
  }
}


  userController.verifyUser = async (req, res) => {
    try {
        const encryptedId = req.headers.authorization
        const decryptedId = await jwt.verify(encryptedId, process.env.JWT_SECRET)
        const user = await models.user.findOne({
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



module.exports = userController









// userController.delete =async (req,res) => {
//   try {
//     const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

//     const user = await models.user.findOne({
//       where: {
//         id: decryptedId.userId
//       }
//     })

//     const deleteFromLabel = await models.label.destroy({
//       where:{
//         labelId: req.params.id
//       }
//     })

//     res.json({user, deleteFromLabel})
//   } catch (error) {
//     res.json({error: error.message})
//   }
// }











//   userController.getLabel = async (req, res) => {
//     try {

//       const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

//       const user = await models.user.findOne({
//         where: {
//           id: decryptedId.userId
//         }
//       })

//       let userId = user.id

//       const label = await models.label.findAll({
//         where: {
//           userId: req.body.userId
//         }
//       })

//       // const signedArtist = await user.getArtists()
//       res.json(user, signedArtist, label)
//     } catch (error) {
//       res.json(error)
//     }
// }
