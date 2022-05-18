
export function up(knex) {
    return knex.schema.createTable('bets', function (table) {
      table.uuid('entry_id').primary().defaultTo(knex.raw("(UUID())"));
      table.string('game_id').references('game_id').inTable('games');
      table.string('teamName').notNull();
      table.integer('dk_odds').notNull();
      table.integer('dk_persentage').notNull();
      table.integer('our_prediction').notNull();
    });
  }
  export function down(knex) {
    return knex.schema.dropTable('bets');
  }
