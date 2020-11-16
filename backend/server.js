const express = require('express')
const cors = require('cors')
// const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

// app.use(bodyParser.json({ extended: true }))
// app.use(bodyParser.urlencoded({ extended: true }))

// connection string
const URL = process.env.CONNECTION_URL

// connecting to database
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('Successfully connected to database'))
    .catch(err => console.log(err.message))


// routes
const userRouter = require('./routes/user')
const exerciseRouter = require('./routes/exercise')

app.use('/users', userRouter)
app.use('/exercises', exerciseRouter)


const PORT = process.env.PORT || 5000

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on port: ${PORT}`)
    }
})