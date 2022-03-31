const db = require('./config/db')
import express from "express";
import routes from "./routes";
import task from "./adpters/CronAdpater"

const app = express()


app.use(routes)
task.start()


app.listen(3333)