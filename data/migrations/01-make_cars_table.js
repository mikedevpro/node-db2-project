exports.up = function (knex) {
  return knex.schema.createTable('cars', (table) => {
    table.increments('id').primary();
    table.string('vin', 13).notNullable().unique();
    table.string('make', 128).notNullable();
    table.string('model', 100).notNullable();
    table.integer('mileage').unsigned().notNullable();
    table.string('title', 100)
    table.string('transmission', 100)
  });
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists('cars');
};
