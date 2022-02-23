const Schema = require('../models/course')

const getCourse = require('./courseController');

describe('creating',() =>{
    it.only('',async()=>{
        Schema.find = jest.fn().mockReturnValueOnce({
            name: "Jyo",
        })
    // it.create()
    })
    it.only('',async() => {
        getCourse.getCourse = jest.fn().mockReturnValueOnce()

    })
})