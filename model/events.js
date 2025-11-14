const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
    },
    type: {
      type: String, // "Historical", "Cultural", "Natural"
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    openingHours: {
      type: String,
      default: "—", 
    },
    entryFee: {
      type: String,
      default: "$ + service fee", 
    },
    description: {
      type: String,
      required: true,
    },

    img: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^https?:\/\/.+/i.test(v);
        },
        message: "Please provide a valid image URL",
      },
    },
  },
  {
    timestamps:false
  }
);

module.exports = mongoose.model("Event", eventSchema);
