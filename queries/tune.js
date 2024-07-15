const db = require('../db/dbConfig')


// get all tunes
const getAllTunes = async () => {
    
    try {
        const allTunes = await db.any("SELECT * FROM tunes")
    return allTunes;
    } catch (error) {
        return error
    }
}
// get single tune
const getTune = async (id) => {
    try {
        const newTune = await db.one("SELECT * FROM tunes WHERE id=$1", id)
        return newTune  
    } catch (error) {
        throw error
    }
}

// create tune
const createTune = async () => {
    try {
        const newTune = await db.one("INSERT INTO tunes (name, artist, is_favorite) VALUES ($1, $2, $3) RETURNING *", [tune.name, tune.artist, tune.is_favorite]) 
        return newTune;
        
    } catch (error) {
        throw error
    }

}


// delete
const deleteTune = async (id) => {
    try {
        const deletedTunes = await db.one("DELETE FROM tunes WHERE id=$1 RETURNING *", id)
    return deletedTunes
        
    } catch (error) {
        return error
    }
    
}

// update

const updateTune = async (id, tune) => {
    try {
        const updatedTune = await db.one("UPDATE tunes SET name=$1, artist=$2, is_favorite=$3 WHERE id=$4 RETURNING *", [tune.name, tune.artist, tune.is_favorite, id])
    return updatedTune
    } catch (error) {
        return
    }

}

module.exports = { 
    getAllTunes,
    getTune,
    createTune,
    deleteTune,
    updateTune
 }
