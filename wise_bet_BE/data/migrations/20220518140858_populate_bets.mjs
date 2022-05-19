export async function up(knex) {
    await knex('bets').insert([{teamName: 'Alpha Team',
                                 dk_odds: -180,
                                 dk_persentage: 64,
                                 our_prediction: 70},
                                 {teamName: 'Beta Team',
                                 dk_odds: +155,
                                 dk_persentage: 40,
                                 our_prediction: 34},
                                 {
                                 teamName: 'Gamma Team',
                                 dk_odds: -170,
                                 dk_persentage: 70,
                                 our_prediction: 65},
                                  {teamName: 'Delta Team',
                                  dk_odds: +145,
                                  dk_persentage: 25,
                                  our_prediction: 35},
                                  {teamName: 'Aleph Team',
                                  dk_odds: -145,
                                  dk_persentage: 87,
                                  our_prediction: 56},
                                  {teamName: 'Bet Team',
                                  dk_odds: +175,
                                  dk_persentage: 25,
                                   our_prediction: 87}
                                ])
  }
  
  
  export function down(knex) {
      return knex.schema.dropTable('users');
  }
  