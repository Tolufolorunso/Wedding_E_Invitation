const mongoose = require("mongoose");

const InviteeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },

  lastname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
  numberOfGuest: { type: Number, default: 0 },
  message: String,
  rsvp: { type: String, default: "Undecided" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Invitee ||
  mongoose.model("Invitee", InviteeSchema);
