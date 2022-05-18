import express from 'express'
import knex from 'knex';
import knexConfig from './data/knexfile.js';
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from './routes/userRoute.js'
import betRoutes from './routes/betRoutes.js'
const dbConnection = knex(knexConfig);
const PORT = 8080;

const app = express();

app.use(cors({ origin: ["*"], credentials: true }))
app.use(express.json())
app.use(cookieParser());

app.disable('etag');
dbConnection
.migrate
.latest()
.then((migration) => {
    if (migration) {
        console.log(`Conneted to DB`, migration);
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    }
})
.catch(err => console.log(err)) 

app.use("/user", userRoute)
app.use('/', betRoutes)


