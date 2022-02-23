const Schema = require('../models/course')

const Course = require('./courseController');

describe('creating',() =>{
    it.only('',async()=>{
        Schema.find = jest.fn().mockReturnValueOnce({
            name: "Jyo",
        })
    // it.create()
    })
    it.only('',async() => {
        Course.getCourse = jest.fn().mockReturnValueOnce()
    })
    it.only('',async() => {
        Course.addCourse = jest.fn().mockReturnValueOnce()
    })
})