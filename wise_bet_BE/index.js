import mysql from 'mysql'
import express from 'express'
const PORT = 8080;
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ origin: ["*"], credentials: true }))
app.use(express.json())
app.use(cookieParser());

app.use("/user", userRoute)

