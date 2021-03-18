const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.send('<h1>Olá mundo!</h1>')
})

module.exports = routes