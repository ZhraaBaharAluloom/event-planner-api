const Event = require("../../db/models/Event");

exports.fetchEvents = async (req, res) => {
  try {
    const events = await Event.find().select(
      "name bookedSeats startDate endDate numOfSeats image"
    );
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.fetchSingleEvent = async (req, res) => {
  try {
    const foundProduct = await Event.findById({ _id: req.params.eventId });
    res.json(foundProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.fullyBookedEvents = async (req, res) => {
  try {
    const events = await Event.find({
      $expr: { $eq: ["$numOfSeats", "$bookedSeats"] },
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductByQuery = async (req, res) => {
  try {
    const { query } = req.params;
    const foundName = await Event.findOne({
      name: { $regex: query, $options: "i" },
    });
    res.json(foundName);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const eventEvent = await Event.create(req.body);
    res.status(201).json(eventEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteEvent = async (req, res) => {
  const foundEvent = await Event.findByIdAndDelete({ _id: req.params.eventId });
  if (foundEvent) res.status(204).end();
  else res.status(404).json({ message: "Not found" });
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      {
        _id: req.params.eventId,
      },
      req.body,
      { new: true }
    );
    if (updatedEvent) res.status(201).json(updatedEvent);
    else res.status(404).json({ message: "Not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
