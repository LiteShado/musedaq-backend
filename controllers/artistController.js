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

artistController.getSignedArtists = async (req, res) => {
    try {
        const artists = await models.artist.findAll({
            where:{
                labelId: req.body.labelId
            }
        })
        res.json({artists})
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

        const labelChoice = await models.label.findOne({
            where: {
                id: req.body.labelId
            }
        })

        const artist = await models.artist.findOne({
            where: {
                id: req.body.id
            }
        })

        let final = await artist.update(req.body)

        res.json({final})
    } catch (error) {
        res.json(error)
    }
}

artistController.unsignArtist = async (req, res) => {
    try {

        // const labelChoice = await models.label.findOne({
        //     where: {
        //         id: req.body.labelId
        //     }
        // })

        const artist = await models.artist.findOne({
            where: {
                id: req.body.id
            }
        })

        artist.labelId = null

        let final = await artist.save()

        res.json({final})
    } catch (error) {
        res.json(error)
    }
}



module.exports = artistController
