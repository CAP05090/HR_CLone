const mongoose = require("mongoose")

const skillsSchema = mongoose.Schema({
    title: {type: String, required:true},
    description:{type:[String], required:true},
    keycompetencies:{type:Object}
}, {
    versionKey: false
})

const SkillsModel = mongoose.model("skill", skillsSchema)

module.exports = {SkillsModel}