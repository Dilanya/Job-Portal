const mongoose = require('mongoose');

const jobSeekerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  jobType: [String],
  skillSet: [String],
  cv: File,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const JobSeeker = mongoose.model('JobSeeker', jobSeekerSchema);

module.exports = JobSeeker;
