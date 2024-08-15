const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true, 
  },
  title: {
    type: String,
    required: true, // Title is required
  },
  description: {
    type: String,
    required: true, // Description is required
  },
  meetingLink: {
    type: String,
    required: true, // Meeting link is required
  }
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

module.exports = mongoose.model('Event', eventSchema);
