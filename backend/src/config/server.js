const param = require('./params')

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(param.port, function() {
    console.log(`BACKEND rodando na PORTA ${param.port}.`)
})

module.exports = server