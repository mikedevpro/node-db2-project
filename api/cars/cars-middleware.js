const Car = require('./cars-model')
const db = require('../../data/db-config')

exports.checkCarId = (req, res, next) => {
    if (!req.body.CarId) {
      throw {
        status: 404,
        message: 'car with id {req.body.CarId} not found',
      }
    }
  }


const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}
