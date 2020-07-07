const express = require('express')
const Album = require('../models/album')
const router = new express.Router()

router.post('/albums', (req, res) => {
    const album = new Album(req.body) 
    album.save().then(album => {
        res.status(201).send(album)
    }).catch(e => {
        res.status(400).send(e)
    })
});

router.get('/albums', (req, res) => {
    Album.find().populate('author').then(albums => res.send(albums)
    ).catch (e=> res.status(500).send())
})


module.exports = router