const mysql = require("mysql2/promise");
const client = mysql.createPool(process.env.CONNECTION_STRING);

const getAllCars = async () => {
  const query = await client.query("SELECT * FROM cars");
  return query[0];
};

const getCarById = async (id) => {
  const query = await client.query("SELECT * FROM cars WHERE car_id = ?", [id]);
  return query[0][0];
};

const createCar = async (car) => {
  const values = [
    car.car_name,
    car.car_brand,
    car.car_top_speed,
    car.car_transmission,
    car.car_engine,
    car.car_year,
    car.car_price,
  ];
  await client.query(
    "INSERT INTO cars (car_name, car_brand, car_top_speed, car_transmission, car_engine, car_year, car_price) VALUES (?, ?, ?, ?, ?, ?, ?)",
    values
  );
};

const updateCar = async (id, carData) => {
  const values = [
    carData.car_name,
    carData.car_brand,
    carData.car_top_speed,
    carData.car_transmission,
    carData.car_engine,
    carData.car_year,
    carData.car_price,
    id,
  ];
  await client.query(
    "UPDATE cars SET car_name = ?, car_brand = ?, car_top_speed = ?, car_transmission = ?, car_engine = ?, car_year = ?, car_price = ? WHERE car_id = ?",
    values
  );
};

const deleteCar = async (id) => {
  const values = [id];
  await client.query("DELETE FROM cars WHERE car_id = ?", values);
};

module.exports = {
  getAllCars,
  getCarById,
  updateCar,
  createCar,
  deleteCar,
};
