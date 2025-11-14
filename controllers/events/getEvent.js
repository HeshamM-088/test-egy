const Event = require("../../model/events");

const getEvent = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "Event ID is required",
        data: null,
      });
    }

    const event = await Event.findById(id, { __v: 0 });

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
        data: null,
      });
    }

    return res.status(200).json({
      message: "Event retrieved successfully",
      data: event,
    });
  } catch (err) {
    console.error("Error getting event:", err);
    return res.status(500).json({
      message: "Error getting event",
      error: err.message,
    });
  }
};

module.exports = getEvent;

