import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
require('dotenv').config()

import { productRouter } from './routes/admin-route'

const app = express()

app.use(
    bodyParser.urlencoded({
      limit: '5mb',
      extended: false,
    })
  ),
app.use(bodyParser.json());
  app.use(cors({
    origin: '*'
  }))

app.use('/motels', productRouter)

let port = process.env.PORT
if (port == null || port == '') {
  port = 3000
} 

mongoose.connect(
  process.env.DB_PASSWORD,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
)
.then(result => {
    app.listen(port, () => {
        console.log(
          `Server is running on port ${port}`
        )
    })
})
.catch(err => console.log(err))
