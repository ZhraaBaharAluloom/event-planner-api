const express = require("express");
const router = express.Router();
const {
  fetchEvents,
  fetchSingleEvent,
  createEvent,
  deleteEvent,
  updateEvent,
  fullyBookedEvents,
  getProductByQuery,
} = require("./controllers");
router.get("/fullyBooked", fullyBookedEvents);
router.get("/:query", getProductByQuery);
router.get("/", fetchEvents);
router.get("/:eventId", fetchSingleEvent);
router.post("/", createEvent);
router.delete("/:eventId", deleteEvent);
router.put("/:eventId", updateEvent);

module.exports = router;
