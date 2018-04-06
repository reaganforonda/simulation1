const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotEnv = require('dotenv');
const massive = require('massive');
const port = 3005;
const app = express();
const controller = require('./controller.js');
dotEnv.config();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance);
}).catch((e) => console.log(`Error: ${e}`));

// ENDPOINTS
app.get('/api/inventory', controller.getInventory);
app.post('/api/product', controller.addNewProduct)
app.delete('/api/inventory/:id', controller.deleteProduct)

app.listen(process.env.port || port, () => {
    console.log(`Creepin on Port: ${port}`);
})