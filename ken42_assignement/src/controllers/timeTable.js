const TimeTable = require("../models/time_table");

exports.addTimeTable = async (req, res) => {
  try {
    const timeTable = await TimeTable.create(req.body);

    res.status(200).json({
      status: "success",
      data: timeTable,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error: error,
    });
  }
};

exports.getTimeTable = async (req, res) => {
  try {
    const timeTable = await TimeTable.find({});

    res.status(201).json({
      status: "success",
      timeTable: timeTable,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error,
    });
  }
};
