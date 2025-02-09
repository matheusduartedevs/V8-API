require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");

app.use(express.json());

app.get("/cars", async (req, res) => {
  const results = await db.getAllCars();
  res.json(results);
});

app.get("/car/:id", async (req, res) => {
  const results = await db.getCarById(+req.params.id);
  res.json(results);
});

app.post("/car", async (req, res) => {
  const car = req.body;
  await db.createCar(car);
  res.sendStatus(201);
});

app.patch("/car/:id", async (req, res) => {
  const id = +req.params.id;
  const car = req.body;
  await db.updateCar(id, car);
  res.sendStatus(200);
});

app.delete("/car/:id", async (req, res) => {
  const id = +req.params.id;
  await db.deleteCar(id);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
