
exports.seed = function(knex) {
  return knex('projects').insert([
    {name: 'World Domination', description: 'Take over the world', completed: false},
    {name: 'Get Rich Quick', description: 'Lotto, bank robbery, ponzi schemes...', completed: false},
    {name: 'Revenge', description: 'Exact payback on people who have wronged me', completed: false},
    {name: 'More Instagram Followers', description: 'Become completely self absorbed to the point companies give you money to push their junk.', completed: false},
    {name: 'Find the Holy Grail', description: 'Indiana Jones style!', completed: false},
    {name: 'Steal Coworker\'s Identity', description: 'Steal some idiots credit cards when they go get coffee.', completed: false}
  ]);
};