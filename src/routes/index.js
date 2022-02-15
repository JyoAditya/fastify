const courseController = require ("../controllers/courseController");


const routes = [
    {
        method: 'GET',
        url: '/api/course',
        schema:{
            response: {
                200: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties:{
                            name: {type:'string'},
                            coursename: {type:'string'},
                            coursetype: {type:'string'},
                            releaseyear:{type:'integer'}
                        }
                    }
                }
            }
        },
        handler: courseController.getCourse
    },
    {
        method: 'GET',
        url: '/api/course/:id',
        schema:{
            response: {
                200: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties:{
                            name: {type:'string'},
                            coursename: {type:'string'},
                            coursetype: {type:'string'},
                            releaseyear:{type:'integer'}
                        }
                    }
                }
            }
        },
        handler: courseController.getSingleCourse
    },
    {
        method: 'POST',
        url: '/api/course',
        handler: courseController.addCourse
    },
    {
        method: 'PUT',
        url: '/api/course/:id',
        handler: courseController.updateCourse
    },
    {
        method: 'DELETE',
        url: '/api/course/:id',
        handler: courseController.deleteCourse
    },
]


module.exports = routes