import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import nameRouter from './routes/nameRoute.js'




const app =express()
dotenv.config()

app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended:true}))


app.use('/names', nameRouter)

const PORT=process.env.PORT

const MONGO_URL=process.env.MONGO_URL


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})

mongoose.connect(MONGO_URL,).then(()=>{
    console.log(`connected to database`)
}).catch((err)=>{
    console.log({message:err.message})
})