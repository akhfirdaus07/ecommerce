const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  // res.send("This is my API");
});

const { authRouter, homeRouter, reportRouter } = require("./routers");
app.use("/auth", authRouter);
app.use("/home", homeRouter);
app.use("/report", reportRouter);

app.listen(process.env.PORT, async () => {
  // db.sequelize.sync({ alter: true });
  console.log(`server running at port : ${process.env.PORT}`);
});
