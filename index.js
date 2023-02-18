import express from 'express'
import connectDB from './db/connectdb.js'
import web from "./routes/web.js"

const app = express()
const DATABASE_URL = "mongodb://localhost:27017";
connectDB(DATABASE_URL)
const port = '3000';

app.use(express.json())
app.use("/worker", web)

app.listen(port, () => {
    console.log("Server is started...")
})