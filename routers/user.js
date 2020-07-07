const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(user => {
        res.status(201).send(user)
    }).catch(e => {
        res.status(400).send(e)
    })
});

router.get('/users', (req, res) => {
    User.find({email: 'halivatomer@gmail.com'}).then(user => res.send(user)
    ).catch (e=> res.status(500).send())
})


module.exports = router