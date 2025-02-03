const cars = [
    { id: 1, name: "Ferrari LaFerrari", brand: "Ferrari", top_speed: 350 },
    { id: 2, name: "Bugatti Chiron", brand: "Bugatti", top_speed: 420 },
    { id: 3, name: "Lamborghini Aventador", brand: "Lamborghini", top_speed: 350 },
    { id: 4, name: "McLaren P1", brand: "McLaren", top_speed: 350 },
    { id: 5, name: "Porsche 911 Turbo S", brand: "Porsche", top_speed: 330 }
  ];

const getAllCars = () => {
    return cars
}

const getCarById = (id) => {
    return cars.filter((car) => car.id === id)
}

const createCar = (car) => {
    cars.push(car)
}

const updateCar = (id, carData) => {
    const car = cars.find((car) => car.id === id)
    if (!car) return
    car.name = carData.name
    car.brand = carData.brand
    car.top_speed = carData.top_speed
}

const deleteCar = (id) => {
    const carIndex = cars.findIndex((car) => car.id === id)
    if (!carIndex) return
    cars.splice(carIndex, 1)
}

module.exports = {
    getAllCars,
    getCarById,
    updateCar,
    createCar,
    deleteCar
}