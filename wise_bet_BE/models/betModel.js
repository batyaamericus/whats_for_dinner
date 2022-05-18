import { dbConnection } from "../index.js";

async function top10 () {
    const QueryResult = await dbConnection.from('bets').select('dk_persentage', 'our_prediction', 'teamName')
    return QueryResult
}

export {
    top10
}