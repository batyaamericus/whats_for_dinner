import { top10 } from "../models/betModel.js"


async function top10Control (req,res,next) {
    try {
        const request = await top10()
        for (let i=0; i < request.length; i++) {
         request[i].difference = Math.abs(Number(request[i].dk_persentage) - Number(request[i].our_prediction))
        }
        request.sort((a,b) => b.difference - a.difference )
        const result = request.slice(0,9)
        res.send(result)
    }
    catch (err) {
        next(err)
    }
}

export {
    top10Control
}