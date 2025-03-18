const mongoose = require('mongoose');

const InviteeSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  firstname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
  numberOfGuest: { type: Number, default: 0 },
  message: String,
  rsvp: { type: String, default: 'Undecided' },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Invitee ||
  mongoose.model('Invitee', InviteeSchema);
