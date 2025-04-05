// DO YOUR MAGIC
const express = require('express');
const Car = require('./cars-model')
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require('./cars-middleware')

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const cars = await Car.getAll()
    res.json(cars)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', checkCarId, async (req, res, next) => {
  res.json(req.car)
})

router.post(
  '/',
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  async (req, res, next) => {
  try {
    const car = await Car.create(req.body)
    res.json(car)
    } catch (error) {
    next(error)
  }
})

module.exports = router
