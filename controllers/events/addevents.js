const Event = require("../../model/events");
const addEvent = async (req, res) => {
    try {
    const {  title, location, type, rating, reviews, openingHours, entryFee, description, img } = req.body;
    if (!title ||!location ||!type ||!description ||!img ||!openingHours ||!entryFee) {
      return res.status(400).json({
        message: "All fields are required",
        data: null,
      });
    }
    const DB_events = await Event.find({}, { __v: 0 });
    const existingEvent = DB_events.find(
      (ev) => ev.description === description
    );

    if (existingEvent) {
      return res.status(400).json({
        message: "This event already exists",
        data: null,
      });
    }
     const newEvent = new Event({
      title,
      location,
      type,
      rating: rating || 0, // default
      reviews: reviews || 0,
      openingHours,
      entryFee,
      description,
      img,
    } );
    console.log(newEvent)
    await newEvent.save();

    return res.status(201).json({
      message: "Event created successfully",
      data: newEvent,
    });

  } catch (err) {
    console.error("Error creating event:", err);
    return res.status(500).json({
      message: "Error creating event",
      error: err.message,
    });
  }
};

module.exports = addEvent;

