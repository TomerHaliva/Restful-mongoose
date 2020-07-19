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

router.put('/albums/:id', (req, res) => {
    const albumid = req.params["id"];
    Album.findByIdAndUpdate(
        { _id: albumid },
        { $addToSet: {photos: req.body} },
        function(err, result) {
            if (err) {
              res.send(err);
            } else {
              res.send(result);
            }
          }
    )
})

router.get('/albums/:id', (req, res) => {
    const albumid = req.params["id"];
    Album.findById(albumid).then(album => res.send(album.photos)
    ).catch (e=> res.status(500).send())
})

module.exports = router