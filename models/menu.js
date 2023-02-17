const mongoose = require('mongoose')


const menuSchema = new mongoose.Schema({

    name: {
        type: String,
        required: 'Please enter your name',
    },
    price: {
        type: Number,
        required: 'Please enter Prise',
    }

})

module.exports = mongoose.model('menu', menuSchema)