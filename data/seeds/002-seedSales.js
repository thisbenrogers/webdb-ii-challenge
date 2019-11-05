
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').del()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {id: 1, customer: 'Slick McFavorite', sale_amount: 1000.99, car_id: 1},
        {id: 2, customer: 'Buddy Guy', sale_amount: 1000.99, car_id: 1},
        {id: 3, customer: 'Slick McFavorite', sale_amount: 1000.99, car_id: 2},
        {id: 4, customer: 'Wonder Woman', sale_amount: 1000.99, car_id: 3},
        {id: 5, customer: 'Slick McFavorite', sale_amount: 1000.99, car_id: 3},
        {id: 6, customer: 'David Bowie', sale_amount: 1000.99, car_id: 3}
      ]);
    });
};
