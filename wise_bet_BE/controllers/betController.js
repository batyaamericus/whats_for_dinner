import {top10, getTheTeams, byTeamName } from "../models/betModel.js"


async function top10Control (req,res) {
    try {
        const request = await top10()
        for (let i=0; i < request.length; i++) {
        request[i].difference = Math.abs(Number(request[i].dk_persentage) - Number(request[i].our_prediction))
        request[i].teams = await getTheTeams(request[i].game_id)
        }
        request.sort((a,b) => b.difference - a.difference)
        const result = request.slice(0,9)
        res.send(result)
    }
    catch (err) {
        console.log(err)
    }
}

async function searchByQuary(req,res) {
    try {
        if (req.params.quary = "name") {
            const request = await byTeamName(req.body.value)
            for (let i=0; i < request.length; i++) {
                request[i].difference = Math.abs(Number(request[i].dk_persentage) - Number(request[i].our_prediction))
                request[i].teams = await getTheTeams(request[i].game_id)
                }
            res.send(request)
        }
    }
    catch (err) {
        console.log(err)
    }
}


export {
    top10Control,
    searchByQuary
}