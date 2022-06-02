const express = require("express");

const router  = express.Router();

const instructor =  require("../controllers/instructor");


router.route("/")
.get(instructor.getInstructor)
.post(instructor.addInstructor)


module.exports = router;