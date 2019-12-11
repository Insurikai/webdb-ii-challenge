exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.text('brand').notNullable();
    tbl.text('make').notNullable();
    tbl.text('model').notNullable();
    tbl.text('VIN').notNullable();
    tbl.text('transmission');
    tbl.text('title');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
/*
{
  brand: '',
  make: '',
  model: '',
  vin: ''
}
*/