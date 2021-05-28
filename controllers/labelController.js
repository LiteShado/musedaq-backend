require('dotenv').config()
const models = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const  labelController = {}





labelController.getOneLabel = async (req, res) => {
    try {

        // const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        // const user = await models.user.findOne({
        //     where: {
        //         id: req.body.id
        //     }
        // })
        // let id = user.id

        const userLabel = await models.label.findOne({
            where: {
                userId: req.body.userId
            }
        })

        res.json({ userLabel })
    } catch (error) {
        res.json(error)
    }
}

labelController.getLabelName = async (req, res) => {
    try {

        // const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        // const user = await models.user.findOne({
        //     where: {
        //         id: req.body.id
        //     }
        // })
        // let id = user.id

        const userLabelName = await models.label.findOne({
            where: {
                id: req.body.id
            }
        })

        res.json({ userLabelName })
    } catch (error) {
        res.json(error)
    }
}

labelController.create = async (req, res) => {

    try {


        const user = await models.user.findOne({
            where: {
                    id: req.body.userId
            }
        })
        userId = user.id
        console.log(userId)
        const label = await models.label.create({
            name: req.body.name,
            userId: req.body.id
        })

        await user.addLabel(label)
        // await label.addLabel(newSign)

        res.json({userId, label, message: 'label created'})
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message})
    }

}

labelController.getLabels = async (req, res) => {
    try {

        // const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        // const userLabel = await models.user.findAll({
        //     where: {
        //         id: req.body.userId
        //     }
        // })

        // let userId = user.id

        const userLabel = await models.label.findAll({
            where: {
                userId: req.body.userId
            }
        })
        const label = userLabel

        res.json(label)
    } catch (error) {
        res.json(error)
    }
}

labelController.delete =async (req,res) => {
    try {
    //   const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

    //   const user = await models.user.findOne({
    //     where: {
    //       id: decryptedId.userId
    //     }
    //   })

      const deleted = await models.label.destroy({

        where:{
            id: req.body.idi
        }
      })

      res.json({messsage: 'deleted'})
    } catch (error) {
      res.json({error: error.message})
    }
  }


module.exports = labelController







// labelController.getAll = async (req, res) => {

//     try {
//         let labels = await models.label.findAll()
//         res.json(labels)
//         res.status(200)

//     } catch (error) {
//     res.status(400).json({ error: error.message })
// }
// }

// labelController.signArtist = async (req, res) => {
    //     try {
        //         const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

//         const user = await models.user.findOne({
//             where: {
//                 id: decryptedId.userId
//             }
//         })

//         let userId = user.id

//         const labelChoice = await models.label.findOne({
//             where: {
//                 userId: userId
//             }
//         })


//         const signed = await models.artist.findOne({
//             where: {
//                 id: id
//             }
//         })

//         let final = await artist.update(req.body)

//         // await user.addArtist(signed)
//         // await signed.addLabel(labelChoice)

//         // await signed.reload()

//         res.json({user,labelChoice,artist, userId, final})
//     } catch (error) {
//         res.json(error)
//     }
// }
