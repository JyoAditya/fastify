const fastify = require ('fastify')({
    logger: true
})

const routes = require('./routes')

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/lcofasti')
.then(()=> console.log("mongo is ready!!"))
.catch(err => console.log(err))

fastify.get('/', async(request,reply) => {
    return {visiter: "Falabella"}
})

routes.forEach((route,index) => {
    fastify.route(route)
})


const start = async() => {
    try{
        await fastify.listen(5000)
        fastify.log.info(`server is running at ${address}`)
    }catch(error){

    }
}
start()