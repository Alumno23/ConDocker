import express from "express";
import prices from "./prices.json" assert { type: "json" };
import products from "../products.json" assert { type: "json" };
const router = express.Router();

/* GET products listing. */
router.get("/", function (req, res) {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data)); // o res.json(data)
});

/* GET prices listing. */
router.get("/:id", function (req, res) {
  const price = prices.find((products) => products.id === req.params.id);
  const product = products.find((products) => products.id === req.params.id);

  if (prices) {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify({ ...product, ...price }));

    /* o hacer product.price = price.price;*/
  } else {
    res.status(404).send("Not found");
  }
});
router.get("/hola", function (req, res) {
  //no va funcionar pero es para ver el error: localhost:3000/products/hola no sale not found porque el id es hola y no le encuentra
  res.send("Hola produecto");
});

export default router;
