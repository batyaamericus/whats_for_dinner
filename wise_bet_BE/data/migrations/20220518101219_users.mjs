
export function up(knex) {
    return knex.schema.createTable('users', function (table) {
      table.uuid('user_id').primary().defaultTo(knex.raw("(UUID())"));
      table.string('first_name').notNull();
      table.string('last_name');
      table.string('e_mail').notNull();
      table.string('password').notNull();
    });
  }
  export function down(knex) {
    return knex.schema.dropTable('users');
  }