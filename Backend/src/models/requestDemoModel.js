const mongoose = require("mongoose")

const requestSchema = mongoose.Schema({
    full_name: {type:String, required:true},
    business_Email: {type:String, required:true},
    company_name: {type:String, required:true},
    job_title: {type:String, required:true},
    company_size: {type:String, required:true},
    mobile_number: {type:Number, required:true},
    country:{type:String, required:true}
},{
    versionKey: false
})

const RequestDemoModel = mongoose.model("RequestDemo", requestSchema)


module.exports = {RequestDemoModel}