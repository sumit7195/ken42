const mongoose  = require("mongoose");

const instructor_schema = new mongoose.Schema({
    name:  {type: String, required:true},
    dept:  {type: String, required:true},
    age: {type:Number, required: true}
})  



const instructor  = mongoose.model("instuctor", instructor_schema);


module.exports =  instructor;

