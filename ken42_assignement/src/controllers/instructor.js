const instructor =  require("../models/instructor_model");

exports.addInstructor = async(req,res)=>{

    try{

          const instructors  = await instructor.create(req.body);

          res.status(201).json({
              status: "success",
              data : instructors
          })



    }
    catch(error){

        res.status(400).json({
            status: "fail",
            error: error
        })


    }

}
exports.getInstructor = async(req,res)=>{

    try{

          const instructors  = await instructor.find({});

          res.status(201).json({
              status: "success",
              data : instructors
          })



    }
    catch(error){

        res.staus(400).json({
            status: "fail",
            error: error
        })


    }

}
