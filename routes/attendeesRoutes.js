const router = require("express").Router();
const {
  registerAttendeesController,
  getAttendeesController,
  updateAttendeesController,
} = require("../controllers/attendeesController");

router.post("/register", registerAttendeesController);
router.get("/attendees", getAttendeesController);
router.put("/update/:id", updateAttendeesController);

module.exports = router;
