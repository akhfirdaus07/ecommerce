const db = require("../models");
const product = db.Product;

module.exports = {
  home: async (req, res) => {
    try {
      const data = await product.findAll();
      const offset = JSON.parse(req.query.offset);
      res.status(200).send({
        count: data.length,
        next: `${process.env.BASE_URL}/home?offset=${offset + 9}&limit=9`,
        previous: `${process.env.BASE_URL}/home?offset=${
          offset < 9 ? 0 : offset - 9
        }&limit=9`,
        results: data.slice(offset, offset + 9),
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};
