const Course = require("../models/course")


exports.getCourse = async(req,reply) => {
    try{
        const courses = await Course.find()
        return courses
    }catch(error){
        throw error
    }
}



exports.getSingleCourse = async (req,reply) => {
    try {
        const courseId = req.params.id
        const course = await Course.findById(courseId)
        return course
    } catch(error){
        throw error
    }
}

exports.addCourse = async(req,reply) => {
    try{
        const course = new Course(req.body)
        // course.save()
        // return true
        return course.save()
    } catch (error){
        throw error
    }
}


exports.updateCourse = async (req,reply) => {
    try{
        const courseId = req.params.id
        const course = req.body
        const{... updatedCourse} = course
        const update = await Course.findByIdAndUpdate(courseId, updatedCourse, {new:true})
        return update
    }catch(error){
        throw error
    }
}


exports.deleteCourse = async (req,reply) => {
    try{
       const courseId = req.params.id
       const course = Course.findByIdAndDelete(courseId)
       return course
    }catch(error){
        throw error
    }
}


// const { default: fastify } = require('fastify');
// // const course = require('../models/course');
// const courses = require('../models/course');

// function build(opts = {}) {
//     const app = fastify(opts)
//     app.get('/api/course', { schema: courses }, async function (request, reply) {
//         try {
//             const course = await courses.find()
//             return course
//         } catch (err) {
//             throw new Error(err)

//         }
//     })
//     app.post('/api/course', { schema: courses }, async function (request, reply) {
//         try {
//             const course = new courses(req.body)
//             course.save()
//             return true
//             // return course.save()
//         } catch (error) {
//             throw error
//         }
//     })
//     return app
// }

// module.exports = build
