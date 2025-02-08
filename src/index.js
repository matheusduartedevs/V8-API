const express = require("express");
const { getAllCars, getCarById, updateCar } = require("./db");
const app = express();
const port = 3000;
const db = require("./db");

app.use(express.json());

app.get("/cars", (req, res) => {
  res.json(getAllCars());
});

app.get("/car/:id", (req, res) => {
  const id = +req.params.id;
  res.json(getCarById(id));
});

app.post("/car", (req, res) => {
  const car = req.body;
  db.createCar(car);
  res.sendStatus(201);
});

app.patch("/car/:id", (req, res) => {
  const id = +req.params.id;
  const car = req.body;
  db.updateCar(id, car);
  res.sendStatus(200);
});

app.delete("/car/:id", (req, res) => {
  const id = +req.params.id;
  db.deleteCar(id);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
