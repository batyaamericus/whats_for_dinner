
export function up(knex) {
    return knex.schema.createTable('games', function (table) {
      table.uuid('game_id').primary().notNull()
      table.string('team_1').notNull();
      table.integer('team_2').notNull();
      table.date('date').notNull();
    });
  }
  export function down(knex) {
    return knex.schema.dropTable('bets');
  }

