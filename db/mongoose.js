const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ex5' , {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})