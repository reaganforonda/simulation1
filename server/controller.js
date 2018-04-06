const axios = require("axios");

module.exports = {
  getInventory: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .GET_INVENTORY()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(e => {
        console.log(e);
        res.status(500).send();
      });
  },

  addNewProduct : (req, res) => {
    const dbInstance = req.app.get("db");
    const {name, price, img} = req.body;
    
    dbInstance.CREATE_PRODUCT([name, price, img]).then((result) => {
        res.status(200).send(result);
    }).catch(e => {
        console.log(e);
        res.status(500).send();
    })
  },


  deleteProduct : (req, res) => {
    const dbInstance = req.app.get("db");
    const id = req.params.id;

    dbInstance.DELETE_PRODUCT([id]).then((result) => {
      res.status(200).send(result);
    }).catch(e=> {
      console.log(e);
      res.status(500).send();
    })
  }
  
};
