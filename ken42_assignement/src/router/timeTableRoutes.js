const express = require("express");

const router = express.Router();


const timeTableController = require("../controllers/timeTable");


router
.route("/")
.post(timeTableController.addTimeTable)
.get(timeTableController.getTimeTable)


module.exports =  router;
