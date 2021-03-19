
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'resource 1', resource_description: 'this is the first resource'},
        {resource_name: 'resource 2', resource_description: 'this is the second resource'},
        {resource_name: 'resource 3', resource_description: 'this is the third resource'},
        {resource_name: 'resource 4', resource_description: 'this is the fourth resource'},
        {resource_name: 'resource 5', resource_description: 'this is the fifth resource'},
        {resource_name: 'resource 6', resource_description: 'this is the sixth resource'},
        {resource_name: 'resource 7', resource_description: 'this is the seventh resource'}
      ]);
    });
};
