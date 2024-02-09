const mongoose = require('mongoose');

const jobPostSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true
  },
  jobType: {
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
  applyMethod: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const JobPost = mongoose.model('JobPost', jobPostSchema);

module.exports = JobPost;
