const Schema = require('../models/course')

const Course = require('./courseController');

describe('creating',() =>{
    it.only('',async()=>{
        Schema.find = jest.fn().mockReturnValueOnce({
            name: "Jyo",
        })
    // it.create()
    })
    test.only('',async() => {
        Course.getCourse = jest.fn().mockReturnValueOnce()
    })
    // it.only('',async() => {
    //     Course.addCourse = jest.fn().mockReturnValueOnce({
    //         name: "jyo",
    //         // "name" : "Jyotiraditya",
    //         coursename : "sinha",
    //         coursetype : "student",
    //         releaseyear : 2023
    //     })
    //     expect(Course.addCourse).toEqual(200);
    // })
    // it.only('',()=> {
    //     Course.addCourse = jest.fn();
    //     const value = Course.addCourse({
    //         name: "jyo",
    //         // "name" : "Jyotiraditya",
    //         coursename : "sinha",
    //         coursetype : "student",
    //         releaseyear : 2023
    //     })
    //     expect(value).toBe({
    //         name: "jyo",
    //         // "name" : "Jyotiraditya",
    //         coursename : "sinha",
    //         coursetype : "student",
    //         releaseyear : 2023
    //     })
    // })
    // it.only('',async() => {
    //     Course.addCourse = jest.fn().mockReturnValueOnce()
    //     const VALID_REQUEST = {
    //      name : "Joe",
    //     coursename:  "IT",
    //     coursetype:  "full",
    //     releaseyear: "2000"
    //     }
    // expect(Course.addCourse(VALID_REQUEST)).toBe(true)
    // })
})