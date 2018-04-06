const controller = require('./controller.js');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(corse());



app.listen(porst, ()=> {
    console.log(`Creepin' on Port: ${port}`)
})