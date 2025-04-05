const knex = require('knex')

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/dealer.db3',
  },
  useNullAsDefault: true,
});

const getAll = () => {
  return db('cars');
}

const getById = (id) => {
  return db('cars').where('id', id).first;
}

const create = (car) => {
  const [id] = ('cars').insert(car);
  return getById(id);
}

module.exports = {
  getAll,
  getById,
  create,
};