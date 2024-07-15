const express = require('express')
const tunes = express.Router()
const { getAllTunes } = require('../queries/tune')



tunes.get('/', async (req, res) => {
    const allTunes = await getAllTunes()
    if (allTunes[0]) {
    res.status(200).json(allTunes)
    } else {
        res.status(500).json( { error: 'Internal server error' })
    }
})


module.exports = tunes