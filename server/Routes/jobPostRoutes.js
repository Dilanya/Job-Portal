const express = require('express');
const router = express.Router();
const jobPostController = require('../controllers/jobPostController');

router.post('/jobposts', jobPostController.createJobPost);
router.get('/jobposts', jobPostController.getAllJobPosts);
router.get('/jobposts/:id', jobPostController.getJobPostById);
router.put('/jobposts/:id', jobPostController.updateJobPostById);
router.delete('/jobposts/:id', jobPostController.deleteJobPostById);

module.exports = router;
