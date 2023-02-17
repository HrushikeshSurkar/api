const express = require('express')
const router = express.Router()
const Menu = require('../models/menu')


router.get('/', async (req, res) => {
    try {
        const menus = await Menu.find()
        res.json(menus)
    } catch (err) {
        res.send('Error from get request ' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.id)
        res.json(menu)
    } catch (err) {
        res.send('Error from get one id request ' + err)
    }
})


router.post('/', async (req, res) => {
    const menu = new Menu({
        name: req.body.name,
        price: req.body.price
    })
    try {
        const a1 = await menu.save()
        res.json(a1)
    } catch (err) {
        res.send('Error from post request' + err)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.id)
        menu.name = req.body.name
        menu.tech = req.body.price
        const a1 = await menu.save()
        res.json(a1)
    } catch (err) {
        res.send('Error from patch request')
    }

})

router.delete('/:id', async (req, res) => {
    try {
        const menu = Menu.findById(req.params.id)
        const a1 = await menu.remove()
        res.json(a1)

    } catch (err) {
        res.send('Error from delete request' + err)
    }
})

module.exports = router