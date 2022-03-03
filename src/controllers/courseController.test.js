const Schema = require('../models/course')

const Course = require('./courseController');

describe('creating',() =>{
    it('',async()=>{
        Schema.find = jest.fn().mockReturnValueOnce("Jyo")
        const res = await Course.getCourse()
        expect(res).toEqual("Jyo")
    // it.create()
    })
    // it('',async()=>{
    //     const id = 123;
    //     Schema.findById = jest.fn().mockReturnValueOnce()
    //     const res = await Course.getSingleCourse(123)

    //     expect(res).toEqual()
    // // it.create()
    // })
    
    // const res = await Course.getCourse()
    // expect(res).toEqual("Jyo")
    // test('',async() => {
    //     t.equal(response.statusCode, 201, 'returns a status code of 201')
    // })
    // it.only('',async() => {
    //     Course.addCourse = jest.fn().mockReturnValueOnce({
    //         name: "jyo",
    //         // "name" : "Jyotiraditya",
    //         coursename : "sinha",
    //         coursetype : "student",
    //         releaseyear : 2023
    //     })
    //     expect(Course.addCourse).toEqual(200);
    })


//     // --*-- also this function is showing that thing written in toBe is saying undefined --*-- 

//     // it.only('',()=> {
//     //     Course.addCourse = jest.fn();
//     //     const value = Course.addCourse({
//     //         name: "jyo",
//     //         // "name" : "Jyotiraditya",
//     //         coursename : "sinha",
//     //         coursetype : "student",
//     //         releaseyear : 2023
//     //     })
//     //     expect(value).toBe({
//     //         name: "jyo",
//     //         // "name" : "Jyotiraditya",
//     //         coursename : "sinha",
//     //         coursetype : "student",
//     //         releaseyear : 2023
//     //     })
//     // })


//     // it.only('',async() => {
//     //     Course.addCourse = jest.fn().mockReturnValueOnce()
//     //     const VALID_REQUEST = {
//     //      name : "Joe",
//     //     coursename:  "IT",
//     //     coursetype:  "full",
//     //     releaseyear: "2000"
//     //     }
//     // expect(Course.addCourse(VALID_REQUEST)).toBe(true)
//     // })
// })

// const { test } = require('tap')
// const getCourse = require('./courseController')
// test('requests the "/api/course" route', async t => {
//     // const app = build()
//     const app = getCourse.getCourse()
//     // const text = {
//     //     "name": "sneha",
//     //     "coursename": "sinha",
//     //     "coursetype": "student",
//     //     "releaseyear": 2023
//     // }
//     const response = await app.inject({
//         method: 'GET',
//         url: '/api/course',
//         // body:
//         //     text

//     })
//     t.equal(response.statusCode, 201, 'returns a status code of 201')
//     t.equal(response.statusMessage, 'Created', 'returns a true')
// })
// 'use strict'
// const tap = require('tap');
// const buildFastify = require('./courseController');
// tap.test('GET `/api/course` route', t => {
//     t.plan(2)
//     const fastify = buildFastify.getCourse()
//     // t.teardown(()=> fastify.close())

//     fastify.inject({
//         method: 'GET',
//         url: '/api/course'
//     },(err,response) => {
//         t.error(err)
//         t.equal(response.statusCode,200)
//         // t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
//         // t.same(response.json(), { hello: 'world' })
//     })


// })





// describe("names", ()=> {
//     test ("names", () => {
//         const course = require('./courseController')
//         const names = course.getCourse("jyotir","sinha","intern","2024")
//         console.log(names)
//     })
// })