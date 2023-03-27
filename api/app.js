//servidor web api

import express from "express";
import morgan from "morgan";
import indexRouter from "./routes/index.js";
import productsRouter from "./routes/product.js";

//crear una instancia
const app = express();
app.use(morgan("dev"));
//definir raiz
app.get("/", function (req, res) {
  res.send("Hello Mundo");
});
app.use("/", indexRouter);
app.use("/products", productsRouter);

//arrancar servidor por el puerto 3000

app.listen(3000);
