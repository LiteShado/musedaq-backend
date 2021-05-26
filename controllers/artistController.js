require('dotenv').config()
const models = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const label = require('../models/label')


const artistController = {}


artistController.getAll = async (req, res) => {
    try {
        const artist = await models.artist.findAll()
           res.json({artist})
    } catch (error) {
        res.json({error: error.message})
    }
}

artistController.getOne = async (req, res) => {
    try {
        const artist = await models.artist.findOne({
            where:{
                id: req.params.id
            }
        })

           res.json({artist})
    } catch (error) {
        res.json({error: error.message})
    }
}

artistController.signArtist = async (req, res) => {
    try {
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        const user = await models.user.findOne({
            where: {
                id: decryptedId.userId
            }
        })

        let userId = user.id

        const labelChoice = await models.label.findOne({
            where: {
                userId: userId
            }
        })

        let labelId = labelChoice.id


        const artist = await models.artist.findOne({
            where: {
                id: req.body.id
            }
        })

        let final = await artist.update(req.body)

        // await user.addArtist(signed)
        // await signed.addLabel(labelChoice)

        // await signed.reload()

        res.json({final})
    } catch (error) {
        res.json(error)
    }
}



module.exports = artistController
