const controller = require('./controller.js');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const port = 3010;

const app = express();

app.use(bodyParser.json());
app.use(cors());



app.listen(port, ()=> {
    console.log(`Creepin' on Port: ${port}`)
})