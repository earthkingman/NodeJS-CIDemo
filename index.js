const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const user = require('./api/user/index')

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users', user)

module.exports = app