import { dbConnection } from "../index.js";

async function top10() {
  const QueryResult = await dbConnection
    .from("bets")
    .select(
      "entry_id",
      "dk_persentage",
      "our_prediction",
      "teamName",
      "game_id"
    );
  return QueryResult;
}

async function byTeamName(query) {
  const { name, date } = query;
  if (name) {

    const QueryResult = await dbConnection
      .from("bets")
      .select(
        "dk_persentage",
        "our_prediction",
        "teamName",
        "game_id"
      )
      .where("teamName", "like", `%${name}%`)
      .limit(20);
      return QueryResult;

  } else if(date){

      console.log("inside date: ", date)
      const QueryResult = await dbConnection.from('bets')
        .select('bets.game_id', 'bets.our_prediction', 'bets.teamName', 'games.date', 'bets.dk_persentage', 'bets.entry_id')
        .innerJoin('games', 'bets.game_id' , 'bets.game_id')
        .where("games.date", "=", `${date}`)
        .limit(20);
      return QueryResult;
  }

}

async function getTheTeams(game_id) {
  const QueryResult = await dbConnection
    .from("games")
    .select("team_1", "team_2", "date")
    .where({ game_id: game_id })
    .limit(10);
  return QueryResult[0];
}

export { top10, getTheTeams, byTeamName };
