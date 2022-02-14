const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name: String,
    surname: String,
    position: String,
    joiningyear: Number
})

module.exports = mongoose.model('Course',courseSchema)