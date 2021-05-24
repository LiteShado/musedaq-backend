require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const models = require('../models')


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

artistController.save = async (req, res) => {
    try {
        const artist = await models.artist.findOne({
            where:{
                id:req.params.id
            }
        })
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        const user = await models.userInfo.findOne({
            where: {
                id: decryptedId.userId
            }
        })

        const artistLabel = await models.artistlabel.create({
            artistId:artist.id,
            labelId:label.id
        })
        await user.addArtistLabel(artistLabel)
        await artist.addArtistLabel(artistLabel)

        res.json({artist, user, artistLabel})
    } catch (error) {
        res.json(error)
    }
}


module.exports = artistController
