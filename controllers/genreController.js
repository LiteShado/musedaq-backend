require('dotenv').config()
const models = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const genreController = {}

genreController.getAll = async (req, res) => {

    try {
        let genre = await models.genre.findAll()
        res.json(genre)
        res.status(200)

    } catch (error) {
    res.status(400).json({ error: error.message })
}
}

module.exports = genreController
