export async function up(knex) {
    await knex('games').insert([{game_id: "ATBT220518",
                                team_1: 'Alpha Team',
                                team_2: 'Beta Team',
                                date: '2022-05-18'},
                                {game_id: "ATBT220519",
                                team_1: 'Gamma Team',
                                team_2: 'Delta Team',
                                date: '2022-05-19'},
                                {game_id: "ATBT220520",
                                team_1: 'Alef Team',
                                team_2: 'Bet Team',
                                date: '2022-05-19'}])
  }
  
  
  export function down(knex) {
      return knex.schema.dropTable('users');
  }
  