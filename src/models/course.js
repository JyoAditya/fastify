const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name: String,
    coursename: String,
    coursetype: String,
    releaseyear: Number
})

module.exports = mongoose.model('Course',courseSchema)