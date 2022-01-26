const param = require('./params')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect(`mongodb://${param.server}/bdtodo`)