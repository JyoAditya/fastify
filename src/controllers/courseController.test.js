const Schema = require('../models/course')

// const create = require('./courseController');

describe('creating',() =>{
    it.only('',async()=>{
        Schema.find = jest.fn().mockReturnValueOnce({
            name: "Jyo",
        })
   
    // Schema.prototype.save = jest.fn().mockImplementation(()=>{});
    // await expect(create("Jyotir","Sinha", "Intern","2015")).rejects.toThrowError();
})
})