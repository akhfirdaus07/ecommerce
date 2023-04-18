const db = require("../models");
const product = db.Product;

module.exports = {
  home: async (req, res) => {
    try {
      const data = await product.findAll();
      res.status(200).send({
        status: true,
        data,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};
