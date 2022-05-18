
export function up(knex) {
    return knex.schema.createTable('users', function (table) {
      table.uuid('user_id').primary().defaultTo(knex.raw("(UUID())"));
      table.string('name').notNull();
      table.string('lastName').notNull();
      table.string('email');
      table.string('pwd').notNull();
      table.string('confirmPwd').notNull();
    });
  }
  export function down(knex) {
    return knex.schema.dropTable('users');
  }