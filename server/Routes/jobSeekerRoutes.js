const express = require('express');
const router = express.Router();
const jobSeekerController = require('../controllers/jobSeekerController');

router.post('/jobseekers', jobSeekerController.createJobSeeker);
router.get('/jobseekers', jobSeekerController.getAllJobSeekers);
router.get('/jobseekers/:id', jobSeekerController.getJobSeekerById);
router.put('/jobseekers/:id', jobSeekerController.updateJobSeekerById);
router.delete('/jobseekers/:id', jobSeekerController.deleteJobSeekerById);

module.exports = router;
