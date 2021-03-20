const express = require('express')
const consign = require('consign')
const expressValidator = require('express-validator')
const app = express()

app.use(express.urlencoded())
app.use(express.json())
app.use(expressValidator())

consign().include('routes').include('utils').into(app)

app.listen(3000, '127.0.0.1', () => {
    console.log('servidor rodando em http://localhost:3000');
})