import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import routes from './routes/index'


const app = express()
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())

app.use('/api', routes.authRouter)
app.use('/api', routes.imgRouter)

const PORT = process.env.PORT || 5000

const URI = process.env.MONGODB_URL as string;

mongoose.connect(URI
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

app.listen(PORT, () => {
    console.log(`Server is running on port', ${PORT}`)
})