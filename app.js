require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mainRoute = require('./routes/mainRoute')

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(mainRoute)

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

app.get('/test',(req,res) => {
    res.send('hello');
})