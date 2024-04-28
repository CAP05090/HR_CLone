const express = require("express")
const dotenv = require("dotenv").config()
const swaggerjsdoc = require("swagger-jsdoc")
const swaggerui = require("swagger-ui-express")
const cors = require("cors")

const { connection } = require("./configs/db")
const { limiter } = require("./middlewares/Limiter.Middleware")
const { errorHandle } = require("./middlewares/errorHandling.middleware")
const { userRouter } = require("./routes/userRoutes")
const { questionRouter } = require("./routes/questionsRoute")

const app = express()
const PORT = process.env.PORT

// Middlewares
app.use(express.json())
app.use(errorHandle)
app.use(limiter)
app.use(cors({origin:"*"}))

// Routes
app.use("/users", userRouter)
app.use("/challenge", questionRouter)

// Swagger-Docs
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "ED-Tech_Site_Docs",
            version: "1.0.0"
        },
        servers: [{url:"http://localhost:8080"}]
    },
    apis: ["src/routes/*.js"]
}
//Open API Specs
const openAPISpecs = swaggerjsdoc(options)
// Build the Swagger with help of openAPI
app.use("/docs", swaggerui.serve, swaggerui.setup(openAPISpecs))


app.listen(PORT, async()=>{
    try {
        await connection
        console.log(`Express is running on port ${PORT} and DB is connected`)
    } catch (error) {
        
    }
})