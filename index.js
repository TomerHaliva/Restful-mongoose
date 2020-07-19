const express = require('express')
require('./db/mongoose')
path = require('path')
const albumRouter = require('./routers/album')
const userRouter = require('./routers/user')

const app =  express()
const port = 3001;

app.use(express.json())
app.use(albumRouter)
app.use(userRouter)
app.use('/main', express.static(path.join(__dirname, './html/index.html')));
app.use('/add_album', express.static(path.join(__dirname, './html/add_album_form.html')));
app.use('/add_photo', express.static(path.join(__dirname, './html/add_photo_form.html')));
app.use('/show_pictures', express.static(path.join(__dirname, './html/show_pictures.html')));
app.use('/js', express.static(path.join(__dirname, 'js')));

const server = app.listen(port, () => {
    console.log('listening on port %s...', server.address().port);
});