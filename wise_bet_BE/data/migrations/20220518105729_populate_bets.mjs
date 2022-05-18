export async function up(knex) {
    await knex('bets').insert([{date: '22-06-22',
                                 team_1: 'Alpha Team',
                                 team_1_wins_dk_odds: -180,
                                 team_1_wins_dk_persentage: 64,
                                 team_1_wins_our_prediction: 70,
                                 team_2: 'Beta Team',
                                 team_2_wins_dk_odds: +155,
                                 team_2_wins_dk_persentage: 40,
                                 team_2_wins_our_prediction: 34},
                                 {date: '22-06-22',
                                  team_1: 'Gamma Team',
                                  team_1_wins_dk_odds: -170,
                                  team_1_wins_dk_persentage: 70,
                                  team_1_wins_our_prediction: 65,
                                  team_2: 'Delta Team',
                                  team_2_wins_dk_odds: +145,
                                  team_2_wins_dk_persentage: 25,
                                  team_2_wins_our_prediction: 35},
                                  {date: '22-07-22',
                                  team_1: 'Aleph Team',
                                  team_1_wins_dk_odds: -145,
                                  team_1_wins_dk_persentage: 87,
                                  team_1_wins_our_prediction: 56,
                                  team_2: 'Bet Team',
                                  team_2_wins_dk_odds: +175,
                                  team_2_wins_dk_persentage: 25,
                                  team_2_wins_our_prediction: 87}
                                ])
  }
  
  
  export function down(knex) {
      return knex.schema.dropTable('users');
  }
  