
exports.up = function(knex) {
  return knex.schema
    .createTable('cars', cars => {
      cars.increments();

      cars
        .string('VIN', 64)
        .notNullable();

      cars
        .string('make', 128)
        .notNullable();

      cars
        .string('model', 128)
        .notNullable();

      cars
        .float('mileage')
        .notNullable();

      cars
        .string('transmission', 128);
      
      cars
        .string('title', 128);

    })

    .createTable('sales', sales => {
      
      sales.increments();

      sales
        .string('customer', 255)
        .notNullable();

      sales
        .float('sale_amount')

      sales
        .integer('car_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('cars')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

    })

};

exports.down = function(knex) {
  return knex.schema

    .dropTableIfExists('cars')
    .dropTableIfExists('sales');

};
