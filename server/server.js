require('dotenv').config()

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/sgChurch', { useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const testRouter = require('./routes/test')
app.use('/test', testRouter)

app.listen(8001, () => console.log('server started'))

