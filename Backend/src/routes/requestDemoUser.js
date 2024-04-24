const { RequestDemoModel } = require("../models/requestDemoModel")

const requestUserRouter = require("express").Router()

requestUserRouter.post("/register", async(req, res)=> {
    const {full_name, business_email, company_name, job_title, company_size, mobile_number, country} = req.body
    try {
        let workEmail = await RequestDemoModel.fondOne({business_email})
        if (workEmail) {
            res.send("Already requested")
        }
        const requestUser = new RequestDemoModel(
            {full_name, business_email, company_name, job_title, company_size, mobile_number, country}
        )
        await requestUser.save()
        res.send("")
    } catch (error) {
        res.send(error.message)
    }
})