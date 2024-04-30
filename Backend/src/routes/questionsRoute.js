const QuestionModel = require("../models/QuestionModel")
const questionRouter = require("express").Router()

// Added Question
questionRouter.post("/add", async(req, res)=>{
    try {
        let que = await new QuestionModel(req.body)
        await que.save()
        res.status(200).send({"msg":"Question Added to Database"})
    } catch (error) {
        res.send(error.message)
    }
})

//Read Question
questionRouter.get("/", async(req, res)=>{
    try {
        const question = await QuestionModel.find()
        res.send(question)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// Update Question
questionRouter.patch("/update/:questionId", async(req, res)=>{
    try {
        await QuestionModel.findByIdAndUpdate({_id:questionId}, req.body)
        res.status(200).send(`question has been updated of id ${questionId}`)
    } catch (error) {
        res.send(error.message)
    }
})

// Delete Question
questionRouter.delete("/delete/:questionId", async(req, res)=>{
    try {
        await QuestionModel.findByIdAndDelete({_id:questionId}, req.body)
        res.status(200).send(`question has been deleted of id ${questionId}`)
    } catch (error) {
        res.send(error.message)
    }
})
module.exports = { questionRouter }
