
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments();
    tbl.text('name', 128)
      .notNullable();
    tbl.text('description')
    tbl.boolean('completed')
  })
  .createTable('actions', tbl => {
    tbl.increments();
    tbl.text('description')
      .notNullable();
    tbl.text('notes')
    tbl.boolean('completed')
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('actions');
};
