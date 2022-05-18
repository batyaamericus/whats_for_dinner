import mysql from 'mysql'
import express from 'express'
const PORT = 8080;

app.use(cors({ origin: ["*"], credentials: true }))
app.use(express.json())