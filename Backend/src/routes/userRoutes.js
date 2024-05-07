const dotenv = require("dotenv").config()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { BlackListModel } = require("../models/BlackListModel")
const { UserModel } = require("../models/userModel")

const userRouter = require("express").Router()

// YAML
/**
 * @swagger
 *  components:
 *      schemas:
 *          User:
 *              type: object
 *              properties:
 *                  id: 
 *                      type: string
 *                      description: The unique id generated by MongoDB.
 *                  name: 
 *                      type: string
 *                      description: Name of the users.
 *                  email: 
 *                      type: string
 *                      description: Email id of the users.
 *                  password: 
 *                      type: string
 *                      description: hashed strong Password of User.
 */

/**
 * @swagger
 *  tags:
 *      name: Users
 *      description: All the API routes to users.
 */

// Register User

/**
 * @swagger
 *  /register:
 *      post:
 *          summary: Register a new User
 *          tags: [Users]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/User"
 *                      example: 
 *                          - id: 1
 *                            name: "AAAAA"
 *                            email: "aaa@gmail.com"
 *                            password: "Asss@#123"
 *          responses:
 *              '200':
 *                  description: The user hasbeen registered Successfully
 *                  content:
 *                      application/json:
 *                          example:
 *                              msg: User registered Successfully.
 *              '400':
 *                  description: Bad request of error during register.
 *                  content:
 *                      application/json:
 *                          example:
 *                              msg: Error message indicating the issue.
 *                              Error: More details about the error.
 */

userRouter.post("/register", async(req, res)=>{
    const {name, email, password, education, stream} = req.body
    try {
        let Email = await UserModel.findOne({email})
        if(Email ){
            res.send("Already Registered") 
        } else{
            if(isStrongPassword(password)){
                bcrypt.hash(password, 7, async(err, hash) =>{
                    if(err){
                        res.status(400).send("Error During Hashing Password")
                    } else{
                        let user = new UserModel({name, password: hash, email, education, stream})
                        await user.save()
                        const Atoken = jwt.sign({userId: user._id, email: user.email}, process.env.AccessKey, {expiresIn:"24h"})
                        const Rtoken = jwt.sign({userId: user._id, email: user.email}, process.env.RefreshKey, {expiresIn:"7d"})
                        res.status(200).send({msg:"Signup SuccessFully", AccessToken: Atoken, RefreshToken: Rtoken})
                    }
                })
            } else{
                res.send("Password does not meet criteria")
            }
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// Login User

/**
 * @swagger
 *  /users/login:
 *      post:
 *          summary: Login Users.
 *          tags: [Users]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              email: 
 *                                  type: string 
 *                                  description: Users Email
 *                              password: 
 *                                  type: string 
 *                                  description: Users password
 *          responses:
 *              '200':
 *                  description: The user hasbeen Login successfully.
 *                  schema:
 *                      type: object
 *                      properties:
 *                          msg:
 *                              type: string
 *                              example: Login SuccessFul
 *                          AccessToken:
 *                              type: string
 *                              example: eyJhbGciOiJIUzI1NiIsIn...
 *                          RefreshToken:
 *                              type: string
 *                              example: eyJhbGciOiJIUzI1NiIsIn...
 *                          
 *              '400':
 *                  description: Some thing went wrong
 */

userRouter.post("/login", async(req, res)=>{
    const {email, password} = req.body
    try {
        let user = await UserModel.findOne({email})
        if(user){
            bcrypt.compare(password, user.password, (err, result)=>{
                if(err){
                    res.status(401).send("Incorrect Password")
                } else{
                    const Atoken = jwt.sign({userId: user._id, email: user.email}, process.env.AccessKey, {expiresIn:"24h"})
                    const Rtoken = jwt.sign({userId: user._id, email: user.email}, process.env.RefreshKey, {expiresIn:"7d"})
                    res.status(200).send({msg:"Login SuccessFully", AccessToken: Atoken, RefreshToken: Rtoken})
                }
            })
        } else{
            res.status(404).send('User Not found')
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//Refresh User Token

/**
 * @swagger
 *  /users/refresh:
 *      get:
 *          summary: Refresh the page and get a new access token.
 *          tags: [Users]
 *          parameters:
 *              - in: header
 *                name: authorization
 *                schema:
 *                  type: string
 *                required: true
 *                desccription: Refresh token generated during Login.
 *          responses:
 *              '200':
 *                  description: Get a new Access Token.
 *                  content: 
 *                      application/json:
 *                          example:
 *                              AccessToken: eyJhbGciOiJIUzI1NiIsIn...
 *              '400':
 *                  description: Token Expires.
 *              '401':
 *                  description: Unauthorized user.
 */

userRouter.get("/refresh", (req, res)=>{
    const Rtoken = req.headers.authorization?.split(" ")[1]
    if(Rtoken){
        jwt.verify(Rtoken, process.env.RefreshKey, (err, decoded)=>{
            if(err){
                res.status(400).json({message: "Session Expires"})
            } else{
                const Atoken = jwt.sign({userId: decoded.userId}, process.env.AccessKey, {expiresIn:"24h"})
                res.status(200).json({AccessToken: Atoken})
            }
        })
    } else{
        res.status(401).json({message:"Unauthorized User"})
    }
})

// Logout User

/**
 * @swagger
 *  /users/logout:
 *      get:
 *          summary: Users Logout
 *          tags: [Users]
 *          parameters:
 *              - in: header
 *                name: authorization
 *                schema:
 *                  type: string
 *                required: true
 *                description: Access token to invalidated
 *          responses:
 *              '200':
 *                  description: User Logout successfully.
 *              '400':
 *                  description: Something went wrong.
 */

userRouter.get("/logout", async(req, res)=>{
    const token = req.headers.authorization?.split(" ")[1]
    try {
        const tokens = new BlackListModel({token: token, date: new Date()})
        await tokens.save()
        res.send("User logout Successfully")
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = {userRouter}

// Check Strong Password

const isStrongPassword = (password) =>{
    const Lreg = /[a-z]/
    const Ureg = /[A-Z]/
    const Dreg = /\d/
    const Sreg = /[!@#$%&*_]/
    const Checklen = password.length >=8

    const isStrong = 
    Lreg.test(password) &&
    Ureg.test(password) &&
    Dreg.test(password) &&
    Sreg.test(password) &&
    Checklen

    return isStrong
}
