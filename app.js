const express = require('express')
const app = express()
const cors = require('cors')
const tunerController = require('./controllers/tunerController')



//middleware

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to my music app! ;)')
})

//handing it off to the tunerController
app.use('/tunes', tunerController)

app.get('*', (req, res) => {
    res.status(404).send("Page is lost to the matrix")
})

module.exports = app