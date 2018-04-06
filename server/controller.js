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
  }
};
