const userModel = require("../models/userModel");

const registerAttendeesController = async (req, res) => {
  try {
    const { registrationType, attendees } = req.body;

    if (!registrationType)
      return res
        .status(400)
        .json({ status: 400, error: "Registration type is required" });

    if (!attendees) {
      return res
        .status(400)
        .json({ status: 400, error: "Attendees is required" });
    }

    const user = new userModel({
      registrationType,
      attendees,
    });
    await user.save();
    return res.status(201).json({
      status: 201,
      message: "Attendees registered successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      staus: 500,
      error: error.message,
    });
  }
};

const getAttendeesController = async (req, res) => {
  try {
    const attendees = await userModel.find();
    return res.status(200).json(attendees);
  } catch (error) {
    return res.status(500).json({
      staus: 500,
      error: error.message,
    });
  }
};

const updateAttendeesController = async (req, res) => {
  try {
    const { registrationType, attendees } = req.body;

    if (!registrationType)
      return res
        .status(400)
        .json({ status: 400, error: "Registration type is required" });

    if (!attendees) {
      return res
        .status(400)
        .json({ status: 400, error: "Attendees is required" });
    }

    const { id } = req.params;
    console.log(id);
    const user = await userModel.findByIdAndUpdate(
      { _id: id },
      { registrationType, attendees },
      { new: true }
    );
    return res.status(200).json({
      status: 200,
      message: "Attendees updated successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      staus: 500,
      error: error.message,
    });
  }
};

module.exports = {
  registerAttendeesController,
  getAttendeesController,
  updateAttendeesController,
};
