const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":{type:String,required:true},
        "admno":{type:String,required:true},
        "rno":{type:String,required:true},        
        "college":{type:String,required:true}

    }
)
let studentmodel=mongoose.model("students",schema);
module.exports={studentmodel}