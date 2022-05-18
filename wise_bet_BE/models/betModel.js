import { dbConnection } from "../index.js";

async function top10 () {
    const QueryResult = await dbConnection.from('bets').select('entry_id','dk_persentage', 'our_prediction', 'teamName', 'game_id')
    return QueryResult
}

async function byTeamName (value) {
    const QueryResult = await dbConnection.from('bets').select('dk_persentage', 'our_prediction', 'teamName', 'game_id').where('teamName', 'like', `%${value}%`)
    return QueryResult
}

async function getTheTeams (game_id) {
    const QueryResult = await dbConnection.from('games').select('team_1', "team_2", "date").where({game_id: game_id}).limit(10)
    return QueryResult[0]
}

export {
    top10,
    getTheTeams,
    byTeamName
}