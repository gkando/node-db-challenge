
exports.seed = function(knex) {
  return knex('actions').insert([
    { project_id: 1, description: 'solve prime number theory', completed: false},
    { project_id: 1, description: 'crack cyber security', completed: false},
    { project_id: 1, description: 'blackmail world leaders', completed: false},
    { project_id: 2, description: 'collect all the sheep in Scotland', completed: false},
    { project_id: 2, description: 'profit', completed: false},
    { project_id: 2, description: 'find Japanese investors', completed: false},
    { project_id: 2, description: '????', completed: false},
    { project_id: 3, description: 'put the flea in a box', completed: false},
    { project_id: 3, description: 'smash it with a hammer (evil laugh)', completed: false},
    { project_id: 3, description: 'turn your enemy into a flea', completed: false},
    { project_id: 3, description: 'mail the box to yourself and when it arrives...', completed: false},
    { project_id: 4, description: 'write a bot to randomly like posts and follow pages', completed: false},
    { project_id: 4, description: 'try to ignore the persisent feeling of loneliness and disconnection', completed: false},
    { project_id: 4, description: 'watch instagram followers increase', completed: false},
    { project_id: 5, description: 'burn a witch', completed: false},
    { project_id: 5, description: '...and quest some more', completed: false},
    { project_id: 5, description: 'quest', completed: false},
    { project_id: 5, description: '...and quest', completed: false},
    { project_id: 6, description: 'seamlessly take their place', completed: false},
    { project_id: 6, description: 'artfully craft accessories', completed: false},
    { project_id: 6, description: 'procure facial hair', completed: false},
    { project_id: 6, description: 'steal coworker\'s name tag', completed: false}
  ]);
};