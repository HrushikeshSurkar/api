const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/menudb'

const app = express()
mongoose.set('strictQuery', false);
mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const menuRoutes = require('./routes/menus')
app.use('/menus', menuRoutes)

app.listen(9000, () => {
    console.log('Server started')
})
