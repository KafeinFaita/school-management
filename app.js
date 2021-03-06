require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

app.use(cors());

const getRoute = require('./routes/getRoute')
const postRoute = require('./routes/postRoute')
const studentRoute = require('./routes/studentRoute')
const putpatchRoute = require('./routes/putpatchRoute')

const port = process.env.PORT || 3001;

const dbURI = "mongodb+srv://kafein:kafeinfaita@cluster0.3xefo.mongodb.net/school?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(port, () => {
            console.log(`Listening on port ${port}`)
        })
        console.log('Connected to DB!')
    } catch (err) {
        console.log("Connection to DB failed!")
    }
}

connectDB();

app.use(express.json());
app.use(cookieParser()) 

app.use(getRoute)
app.use(postRoute)
app.use(putpatchRoute)
app.use(studentRoute)


app.get('/',(req,res) => {
    res.send("TEST");
})

