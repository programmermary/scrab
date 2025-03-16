import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import Dbconnect from './DBconnection.js'
import router from './routes/authRoutes.js'
import bodyParser from 'body-parser'
dotenv.config()

const app =  express()

Dbconnect()

app.use(cors());
app.use(express.json())
app.use(bodyParser.json())

app.use('/api/auth',router)

const PORT = process.env.PORT || 3001

app.listen(PORT , ()=>{`server is running on ${PORT}`})