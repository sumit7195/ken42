const mongoose  = require("mongoose");


const time_tableSchema =  new mongoose.Schema({
  
    class : {type:Number, required:true},
    course : {type: String, required:true},
    room_capacity : {type:String, required:true},
    instructor :  {type:mongoose.Types.ObjectId, ref: "book"},
    meeting_time : {type:String, required:true}
})


const timeTable =  mongoose.model("timetable", time_tableSchema);

module.exports  =  timeTable;