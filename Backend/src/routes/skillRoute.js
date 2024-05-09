const { SkillsModel } = require("../models/SkillsModel")

const skillRouter = require("express").Router()

skillRouter.get("/", async(req, res)=>{
    try {
        const skills = await SkillsModel.find()
        res.send({"skills": skills})
    } catch (error) {
        res.send({"msg": error.message})
    }
})

skillRouter.post("/create", async(req, res)=>{
    try {
        let skill = new SkillsModel(req.body)
        await skill.save()
        res.send({"msg":"Skills Data is added Successfully"})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

skillRouter.patch("/update/:skillId", async(req, res)=>{
    const {skillId} = req.params
    try {
        await SkillsModel.findByIdAndUpdate({_id:skillId}, req.body)
        res.send({"msg":`Skill Id ${skillId} has been updated`})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

skillRouter.delete("/delete/:skillId", async(req, res)=>{
    const {skillId} = req.params
    try {
        await SkillsModel.findByIdAndDelete({_id:skillId})
        res.send({"msg":`Skill Id ${skillId} has been Deleted`})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

module.exports = {skillRouter}