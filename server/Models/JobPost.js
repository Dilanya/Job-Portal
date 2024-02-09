const mongoose = require('mongoose');

const jobPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: [String], 
    required: true
  },
  skillSet: {
    type: [String], 
    required: true
  },
  
  introduction: String,
  location: String,
  jobProfile: String,
  candidateProfile: String,
  methodForApply: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const JobPost = mongoose.model('JobPost', jobPostSchema);

module.exports = JobPost;
