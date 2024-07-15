const express = require('express')
const tunes = express.Router()
const { getAllTunes, getTune, createTune, deleteTune, updateTune } = require('../queries/tune')
const { checkTuneName } = require('../validation/checkTunes')

// index

tunes.get('/', async (req, res) => {
    const allTunes = await getAllTunes()
    if (allTunes[0]) {
    res.status(200).json(allTunes)
    } else {
        res.status(500).json( { error: 'Internal server error' })
    }
})

// show a single tune
tunes.get('/:id', async (req, res) => {
    const { id } = req.params
    const singleTune = await getTune(id)

    if (singleTune.id) {
        res.status(200).json(singleTune)
    } else {
        res.status(404).json({ error: "Tunes not found"})
    }
})

// create
tunes.post('/', checkTuneName, async (req, res) => {
    const newTune = await createTune(req.body)
    res.json(newTune)
    
})
 
// delete
    tunes.delete('/:id', async (req, res) => {
    const { id } = req.params
    const deletedTune = await deleteTune(id)
    if (deletedTune.id) {
        res.status(200).json({ message: "Delete successful" })
    } else {
        res.status(404).json({ error: 'No tune found'})
    }
   

})

// update

tunes.put('/:id', checkTuneName, async (req, res) => {
    const { id } = req.params;
    const updatedTunes = await updateTune (id, req.body)
    if (updatedTunes.id) {
        res.status(200).json(updatedTunes)
    } else {
        res.status(400).json({ error: "Tune not found"})
    }

})



module.exports = tunes