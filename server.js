const express = require('express')
const app = express()

app.use(require('morgan')('tiny'))
const routesReport = require('rowdy-logger').begin(app)

app.use(express.json())
app.use(require('cors')())

const userInfoRoutes = require('./routes/userInfoRoutes')
app.use('/users', userInfoRoutes)

const artistRoutes = require('./routes/artistRoutes')
app.use('/artist', artistRoutes)

const labelRoutes = require('./routes/labelRoutes')
app.use('/label', labelRoutes)

const genreRoutes = require('./routes/genreRoutes')
app.use('/genre', genreRoutes)

const ratingRoutes = require('./routes/ratingRoutes')
app.use('/rating', ratingRoutes)


const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  routesReport.print()
})
app.get('/', (req,res) => {res.send('hello from backend')})
