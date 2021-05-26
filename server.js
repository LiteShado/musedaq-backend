const express = require('express')
const app = express()

app.use(require('morgan')('tiny'))
const routesReport = require('rowdy-logger').begin(app)

const rowdy = require ('rowdy-logger')

app.use(express.json())
app.use(require('cors')())


const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

require('dotenv').config()

const morgan = require('morgan')

app.use(morgan('tiny'))

app.use(express.json())
app.use(require('cors')())

const lookupUser = async (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
            const user = await models.user.findOne({
                where: {
                    id: decryptedId.userId
                }
            })
            req.user = user
        } else {
            req.user = null
        }

        next()
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

app.use(lookupUser)

const models = require('./models')


app.get('/', (req, res) => {
  res.send('root')
})

const userRoutes = require('./routes/userRoutes')
app.use('/users', userRoutes)

const artistRoutes = require('./routes/artistRoutes')
app.use('/artist', artistRoutes)

const labelRoutes = require('./routes/labelRoutes')
app.use('/label', labelRoutes)

const ratingRoutes = require('./routes/ratingRoutes')
app.use('/rating', ratingRoutes)

const genreRoutes = require('./routes/genreRoutes')
app.use('/genre', genreRoutes)


const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  routesReport.print()
})
