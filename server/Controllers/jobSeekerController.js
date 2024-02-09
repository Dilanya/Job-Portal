const JobSeeker = require('../models/JobSeeker');

// Create a new job seeker
exports.createJobSeeker = async (req, res) => {
  try {
    const newJobSeeker = new JobSeeker(req.body);
    const savedJobSeeker = await newJobSeeker.save();
    res.status(201).json(savedJobSeeker);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all job seekers
exports.getAllJobSeekers = async (req, res) => {
  try {
    const jobSeekers = await JobSeeker.find();
    res.json(jobSeekers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single job seeker by ID
exports.getJobSeekerById = async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.findById(req.params.id);
    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }
    res.json(jobSeeker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a job seeker by ID
exports.updateJobSeekerById = async (req, res) => {
  try {
    const updatedJobSeeker = await JobSeeker.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedJobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }
    res.json(updatedJobSeeker);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a job seeker by ID
exports.deleteJobSeekerById = async (req, res) => {
  try {
    const deletedJobSeeker = await JobSeeker.findByIdAndDelete(req.params.id);
    if (!deletedJobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }
    res.json({ message: 'Job seeker deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
