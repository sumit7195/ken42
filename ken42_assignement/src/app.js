const express  = require("express");
const app =  express();


const timeTableRoutes  = require("./router/timeTableRoutes")
const instructor  = require("./router/instrutorRoutes")
//global middlewares
app.use(express.json());


// routes

app.use("/api/v1/timetable", timeTableRoutes);
app.use("/api/v1/instructor", instructor)



module.exports =  app;