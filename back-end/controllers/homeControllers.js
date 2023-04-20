const db = require("../models");
const product = db.Product;

module.exports = {
  home: async (req, res) => {
    try {
      const data =
        req.query.sort === "default"
          ? await product.findAll({ include: { all: true } })
          : req.query.sort === "ascendAlpha"
          ? await product.findAll({
              include: { all: true },
              order: [["name", "ASC"]],
            })
          : req.query.sort === "descendAlpha"
          ? await product.findAll({
              include: { all: true },
              order: [["name", "DESC"]],
            })
          : req.query.sort === "ascendPrice"
          ? await product.findAll({
              include: { all: true },
              order: [["price", "ASC"]],
            })
          : await product.findAll({
              include: { all: true },
              order: [["price", "DESC"]],
            });

      const offset = JSON.parse(req.query.offset);
      res.status(200).send({
        count: data.length,
        next: `${process.env.BASE_URL}/home?offset=${offset + 9}&limit=9&sort=${
          req.query.sort
        }`,
        previous: `${process.env.BASE_URL}/home?offset=${
          offset < 9 ? 0 : offset - 9
        }&limit=9&sort=${req.query.sort}`,
        results: data.slice(offset, offset + 9),
        data,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};
