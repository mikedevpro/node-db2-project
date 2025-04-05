// STRETCH
const cars = [
  {
    vin: '1111111111',
    make: 'toyota',
    model: 'corolla',
    mileage: 215000,
    title: 'clean',
    transmission: 'automatic',
  },
  {
    vin: '1111111111',
    make: 'toyota',
    model: 'camry',
    mileage: 150000,
    title: 'salvage',
  },
  {
    vin: '1111111111',
    make: 'toyota',
    model: 'prius',
    mileage: 100000,
  },
]

// exports.seed = function(knex) {
//   return knex('cars')
//   .truncate().then(() => {
//     return knex('cars').insert(cars)
//   })
// }

exports.seed = async function (knex) {
  await knex('cars').truncate()
  await knex('cars').insert(cars)
}
