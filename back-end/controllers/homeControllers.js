const db = require("../models");
const product = db.Product;
const category=db.Category;

module.exports = {
  home: async (req, res) => {
    try {
      const categories= await category.findAll();
      // const value=await product.findAll({ include: { all: true } });

      let data =
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

      data=
      req.query.filter ==="default"
      ? data
      : data.filter(({Category}) => Category.name === req.query.filter);

      data =
      req.query.search ===""
      ? data
      : data.filter(element=> element.name.toLowerCase().includes(req.query.search.toLowerCase()));

      const sort = JSON.parse(req.query.limit);
      const offset = JSON.parse(req.query.offset);

      res.status(200).send({
        count: data.length,
        next: `${process.env.BASE_URL}/home?offset=${
          offset + 9
        }&limit=${sort}&sort=${req.query.sort}`,
        previous: `${process.env.BASE_URL}/home?offset=${
          offset < 9 ? 0 : offset - 9
        }&limit=${sort}&sort=${req.query.sort}`,
        results: data.slice(offset, offset + 9),
        // value,
        categories,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};
