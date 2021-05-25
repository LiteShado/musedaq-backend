require('dotenv').config()
const models = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const  labelController = {}

labelController.signArtist = async (req, res) => {
    try {
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        const user = await models.userInfo.findOne({
            where: {
                id: decryptedId.userId
            }
        })

        const label = await user.getLabel()

        const signed = await models.artist.create({
            name:req.body.name,
            fanbase:req.body.fanbase,
            biograpy:req.body.biograpy,
            price:req.body.price,
            genre:req.body.genre,
            rating:req.body.rating
        })

        await user.addArtist(signed)
        await signed.addLabel(label)

        await signed.reload()

        res.json({user,label,artist,myCart})
    } catch (error) {
        res.json(error)
    }
}

labelController.getAll = async (req, res) => {

    try {
        let labels = await models.label.findAll()
        res.json(labels)
        res.status(200)

    } catch (error) {
    res.status(400).json({ error: error.message })
}
}



labelController.getOneLabel = async (req, res) => {
    try {
        const id = localStorage.getItem('userId', userId)

        const user = await models.userInfo.findOne({
            where: {
              id: id
          }
        })

        const userLabel = await models.label.findOne({
            where: {
              id: req.params.id
          }
        })

        let label = await user.getUserLabel()

        res.json({user, userLabel, label})
    } catch (error) {
        res.json(error)
    }
}

labelController.create = async (req, res) => {

    try {

        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        const user = await models.userInfo.findOne({
            where: {
                id: decryptedId.userId
            }
        })

        const label = await models.label.create({
            name: req.body.name,
            // labelId:label.id,
        })
        let userInfoId = user.id

        // const newSign = await models.labels.create({
        //     name: req.body.name,
        //     labelId:label.id,
        //     userInfoId:user.id
        // })

        // const id =  await models.label.findOne({
        //     where: {
        //         id: id
        //     }
        // })
        // let labelId = id
        // const myLabel = await user.getMyLabel()

        await user.addLabel(label)
        // await label.addLabel(newSign)

        res.json({user, userInfoId, label, message: 'label created'})
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message})
    }

}


module.exports = labelController
