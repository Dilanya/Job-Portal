const JobPost = require('../models/JobPost');

// Create a new job post
exports.createJobPost = async (req, res) => {
  try {
    const newJobPost = new JobPost(req.body);
    const savedJobPost = await newJobPost.save();
    res.status(201).json(savedJobPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all job posts
exports.getAllJobPosts = async (req, res) => {
  try {
    const jobPosts = await JobPost.find();
    res.json(jobPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single job post by ID
exports.getJobPostById = async (req, res) => {
  try {
    const jobPost = await JobPost.findById(req.params.id);
    if (!jobPost) {
      return res.status(404).json({ message: 'Job post not found' });
    }
    res.json(jobPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a job post by ID
exports.updateJobPostById = async (req, res) => {
  try {
    const updatedJobPost = await JobPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedJobPost) {
      return res.status(404).json({ message: 'Job post not found' });
    }
    res.json(updatedJobPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a job post by ID
exports.deleteJobPostById = async (req, res) => {
  try {
    const deletedJobPost = await JobPost.findByIdAndDelete(req.params.id);
    if (!deletedJobPost) {
      return res.status(404).json({ message: 'Job post not found' });
    }
    res.json({ message: 'Job post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
