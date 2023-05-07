const db = require("../models");
const product = db.Product;
const category = db.Category;
const cart = db.Cart;
const user = db.User;
const jwt = require("jsonwebtoken");

module.exports = {
  home: async (req, res) => {
    try {
      const categories = await category.findAll();
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

      data =
        req.query.filter === "default"
          ? data
          : data.filter(({ Category }) => Category.name === req.query.filter);

      data =
        req.query.search === ""
          ? data
          : data.filter((element) =>
              element.name
                .toLowerCase()
                .includes(req.query.search.toLowerCase())
            );

      const sort = JSON.parse(req.query.limit);
      const offset = JSON.parse(req.query.offset);

      // Cart Controller
      let decoded=null;
      const token = req.header("authorization");
      if(token) decoded = jwt.verify(token, "JWT") || null;

      const userData = await user.findOne({
        where: {
          id: decoded.id,
        },
      });
      const cartData = await cart.findAll({
        include: { all: true },
        raw: true,
        where: {
          userId: decoded.id,
        },
      });

      res.status(200).send({
        count: data.length,
        next: `${process.env.BASE_URL}/home?offset=${
          offset + 9
        }&limit=${sort}&sort=${req.query.sort}`,
        previous: `${process.env.BASE_URL}/home?offset=${
          offset < 9 ? 0 : offset - 9
        }&limit=${sort}&sort=${req.query.sort}`,
        results: data.slice(offset, offset + 9),
        categories,
        cartData,
        userData,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  addToCart: async (req, res) => {
    try {
      const { qty, totalAmount, userId, productId } = req.body;

      const cartData = await cart.create({
        qty,
        totalAmount,
        userId,
        productId,
      });

      res.status(200).send({
        status: true,
        cartData,
        message: "Add to Cart Successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};
