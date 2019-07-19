const knex = require('knex');

const configOptions = require('../knexfile').development;

module.exports = knex(configOptions);
const db = knex(configOptions);

module.exports = {
  find,
  getActions,
  findById,
  add,
  addAction,
  update,
  remove,
};

function find() {
  return db('projects');
}

function getActions(id) {
  console.log(id)
  return db('projects as p')
    .join('actions as a', 'p.id', 'a.project_id')
    .select('a.id', 'a.description', 'a.notes', 'a.completed')
    .where('p.id', id)
}
// 'r.project_name',
function findById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function add(project) {
  return db('projects')
    .insert(project)
    .then(ids => {
      return findById(ids[0]);
    });
}
function addAction(action) {
  return db('actions')
    .insert(action)
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(id, changes) {
  return db('projects')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('projects')
    .where('id', id)
    .del();
}