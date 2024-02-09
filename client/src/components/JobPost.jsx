import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Typography,
  TextField,
  Button,
  Autocomplete,
  Container
} from '@mui/material';
import axios from 'axios';

const validationSchema = Yup.object({
  jobTitle: Yup.string().required('Job Title is required'),
  jobType: Yup.array().min(1, 'Select at least Type').required('Job Type is required'),
  location: Yup.string().required('Location is required'),
  jobProfile: Yup.string().required('Job Profile is required'),
  candidateProfile: Yup.string().required('Candidate Profile is required'),
  applyMethod: Yup.string().required('Apply Method is required'),
  introduction: Yup.string().required('Introduction is required'),
  skillSet: Yup.array().min(1, 'Select at least one Skill').required('Skill Set is required'),
});

const CreateJobPostForm = () => {
    const skillOptions = [
        'JavaScript',
        'React',
        'Node.js',
        'HTML',
        'CSS',
        'Python',
        
      ];
    
      const jobOptions = [
        'Full-Time',
        'Part-Time',
        'Onsite',
        'Remote',
        'Hybrid',
        'Contract',
        
      ];

  const formik = useFormik({
    initialValues: {
      jobTitle: '',
      jobType: [],
      skillSet: [],
      location: '',
      jobProfile: '',
      candidateProfile: '',
      applyMethod: '',
      introduction: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      try {
        const response = await axios.post('http://localhost:3001/api/jobposts', values);
  
        console.log('Job post created successfully:', response.data);
        alert("Job Post Created Successfully");

        formik.resetForm();
      } catch (error) {
        
        console.error('Error creating job post:', error);
      }
    }
  });

  return (
    <div style={{
      //backgroundImage: `url(${backgroundImage})`
      backgroundColor: 'hsla(267, 55%, 83%, 1)',
    backgroundImage: `radial-gradient(at 74% 93%, hsla(149, 99%, 75%, 1) 0px, transparent 50%),
      radial-gradient(at 71% 57%, hsla(306, 90%, 77%, 1) 0px, transparent 50%),
      radial-gradient(at 79% 61%, hsla(75, 83%, 69%, 1) 0px, transparent 50%),
      radial-gradient(at 51% 2%, hsla(203, 79%, 72%, 1) 0px, transparent 50%),
      radial-gradient(at 14% 64%, hsla(182, 98%, 79%, 1) 0px, transparent 50%)`,
      
      height: 'auto',
      display: 'flex',
      alignItems: 'center',
      overflow: 'auto'
    }}>
        <Container component="main" sx={{
      mt: { xs: 2, sm: 2 },
      mb: { xs: 2, sm: 2 ,lg: 10 },
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.125)',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      maxWidth: { xs: '90%', sm: '80%', md: '60%', lg:'50%' },
      width: '100%', 
      margin: 'auto',
    }}>
      <Typography variant="h4" align="center" gutterBottom>
        Create Job Post
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Job Title"
          name="jobTitle"
          fullWidth
          margin="dense"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.jobTitle}
          error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
          helperText={formik.touched.jobTitle && formik.errors.jobTitle}
          size="small"
        />
        <Autocomplete
              multiple
              id="jobType"
              options={jobOptions}
              getOptionLabel={(option) => option}
              onChange={(event, newValue) => {
                formik.setFieldValue('jobType', newValue);
              }}
              
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Job Type"
                    name="jobType"
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    onChange={formik.handleChange}
                    value={formik.values.jobType}
                    error={formik.touched.jobType && Boolean(formik.errors.jobType)}
                    helperText={formik.touched.jobType && formik.errors.jobType}
                    size="small"
                />
              )}
            />
            <Autocomplete
              multiple
              id="skillSet"
              options={skillOptions}
              getOptionLabel={(option) => option}
              onChange={(event, newValue) => {
                formik.setFieldValue('skillSet', newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={formik.handleChange}
                  value={formik.values.skillSet}
                  error={formik.touched.skillSet && Boolean(formik.errors.skillSet)}
                  helperText={formik.touched.skillSet && formik.errors.skillSet}
                  label="Skill Set"
                  name="skillSet"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  size="small"
                />
              )}
            />
        <TextField
          label="Location"
          name="location"
          fullWidth
          margin="dense"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.location}
          error={formik.touched.location && Boolean(formik.errors.location)}
          helperText={formik.touched.location && formik.errors.location}
          size="small"
        />
        <TextField
          label="Introduction"
          name="introduction"
          fullWidth
          margin="dense"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.introduction}
          error={formik.touched.introduction && Boolean(formik.errors.introduction)}
          helperText={formik.touched.introduction && formik.errors.introduction}
          size="small"
          multiline
          rows={4}
        />
        <TextField
          label="Job Profile"
          name="jobProfile"
          fullWidth
          margin="dense"
          placeholder="Enter job profile"
          onChange={formik.handleChange}
          value={formik.values.jobProfile}
          error={formik.touched.jobProfile && Boolean(formik.errors.jobProfile)}
          helperText={formik.touched.jobProfile && formik.errors.jobProfile}
          rows={4}
          size="small"
          multiline
        />
        <TextField
          label="Candidate Profile"
          name="candidateProfile"
          fullWidth
          margin="dense"
          placeholder="Enter candidate profile"
          onChange={formik.handleChange}
          value={formik.values.candidateProfile}
          error={formik.touched.candidateProfile && Boolean(formik.errors.candidateProfile)}
          helperText={formik.touched.candidateProfile && formik.errors.candidateProfile}
          rows={4}
          size="small"
          multiline
        />
        <TextField
          label="Apply Method"
          name="applyMethod"
          fullWidth
          margin="dense"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.applyMethod}
          error={formik.touched.applyMethod && Boolean(formik.errors.applyMethod)}
          helperText={formik.touched.applyMethod && formik.errors.applyMethod}
          size="small"
        />
        
        <Button type="submit" fullWidth sx={{ color: "white", backgroundColor: "#1c2125" ,'&:hover': {
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)', backgroundColor: "#1c2125" 
    }}}>Create Job Post</Button>
      </form>
      </Container>
    </div>
  );
};

export default CreateJobPostForm;
