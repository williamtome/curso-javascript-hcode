const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json({
        users: [{
            name: 'William',
            email: 'contato@williamtome.dev',
            id: 1
        }]
    })
})

routes.get('/admin', (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json({
        users: []
    })
})

module.exports = routes