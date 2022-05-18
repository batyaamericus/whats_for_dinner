
export function up(knex) {
    return knex.schema.createTable('bets', function (table) {
      table.uuid('entry_id').primary().defaultTo(knex.raw("(UUID())"));
      table.date('date').notNull();
      table.string('teamName').notNull();
      table.integer('team_1_wins_dk_odds').notNull();
      table.integer('team_1_wins_dk_persentage').notNull();
      table.integer('team_1_wins_our_prediction').notNull();
      table.string('team_2').notNull();
      table.integer('team_2_wins_dk_odds').notNull();
      table.integer('team_2_wins_dk_persentage').notNull();
      table.integer('team_2_wins_our_prediction').notNull();
    });
  }
  export function down(knex) {
    return knex.schema.dropTable('bets');
  }
