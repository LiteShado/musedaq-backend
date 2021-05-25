require('dotenv').config()
const models = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const ratingController = {}

ratingController.getAll = async (req, res) => {

    try {
        let rating = await models.rating.findAll()
        res.json(rating)
        res.status(200)

    } catch (error) {
    res.status(400).json({ error: error.message })
}
}

ratingController.getOne = async (req, res) => {

    try {
        const rating = await models.artist.findAll({
            where:{
                rating: req.body.rating
            }
        })

           res.json({rating})
    } catch (error) {
        res.json({error: error.message})
    }
}

module.exports = ratingController
