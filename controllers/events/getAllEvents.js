const Event = require("../../model/events");

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({}, { __v: 0 });

    return res.status(200).json({
      message: "Events retrieved successfully",
      data: events,
    });
  } catch (err) {
    console.error("Error getting events:", err);
    return res.status(500).json({
      message: "Error getting events",
      error: err.message,
    });
  }
};

module.exports = getAllEvents;

