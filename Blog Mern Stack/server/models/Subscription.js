const mongoose = require("mongoose");

const subscriptionSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please add an email address"],
      unique: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },
  },
  { timestamps: true }
);

const Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription;
