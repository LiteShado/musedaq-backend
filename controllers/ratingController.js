ratingController.getAll = async (req, res) => {

    try {
        let rating = await models.rating.findAll()
        res.json(rating)
        res.status(200)

    } catch (error) {
    res.status(400).json({ error: error.message })
}
}

module.exports = ratingController