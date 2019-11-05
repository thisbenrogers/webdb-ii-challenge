
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: '55nsR62296', make: 'Ford', model: 'Bronco', mileage: 104030, transmission: 'manual', title: 'salvage'},
        {id: 2, VIN: 'qBt5EDD49d', make: 'Honda', model: 'Civic', mileage: 302040, transmission: 'automatic', title: 'water-damaged'},
        {id: 3, VIN: 'a9RR23d903FGH', make: 'Toyota', model: 'Corolla', mileage: 20499, transmission: 'automatic', title: 'rebuilt'}
      ]);
    });
};
