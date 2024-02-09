import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Typography,
  TextField,
  Button,
  Grid,
  Autocomplete
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 6 characters'),
  phone: Yup.string().required('Phone Number is required'),
  jobType: Yup.array().min(1, 'Select at least one Job Type').required('Job Type is required'),
  skillSet: Yup.array().min(1, 'Select at least one Skill').required('Skill Set is required'),
  cv: Yup.mixed()
    .required('CV is required')
    .test(
      'fileFormat',
      'CV must be in PDF format',
      (value) => value && value[0] && value[0].type === 'application/pdf'
    )
});

const JobSeekerForm = () => {

  const navigate = useNavigate();

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
      fullName: '',
      email: '',
      password: '',
      phone: '',
      jobType: [],
      skillSet: [],
      cv: null,
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      try {
        const response = await axios.post('http://localhost:3001/api/jobseekers', values);
  
        console.log('Job seeker created successfully:', response.data);
        alert("Registered Successfully");
        navigate('/login')
        
        formik.resetForm();
      } catch (error) {
        console.error('Error creating job seeker:', error);
      }
    }
  });

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Hey Job Seeker!
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Full Name"
          name="fullName"
          fullWidth
          margin="dense"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
          size="small"
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              type="email"
              name="email"
              fullWidth
              margin="dense"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Password"
              type="password"
              name="password"
              fullWidth
              margin="dense"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              size="small"
            />
          </Grid>
        </Grid>
        
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
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
                  error={formik.touched.jobType && Boolean(formik.errors.jobType)}
                  helperText={formik.touched.jobType && formik.errors.jobType}
                  label="Job Type"
                  name="Job Type"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  size="small"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              name="phone"
              fullWidth
              margin="dense"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.phone}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6} >
            <Button component="label"
              margin="normal"
              size="medium"
              fullWidth variant="outlined"
              sx={{ border: '1px solid rgba(0, 0, 0, 0.26)', color: 'currentColor', mt:1 , mb: { xs: 2 }, }}
              startIcon={<CloudUploadIcon />}>
              {formik.values.cv ? 'Uploaded' : 'Upload file'}
              <input type="file" accept=".pdf" hidden onChange={(e) => formik.setFieldValue('cv', e.target.files)} />
            </Button>
            {formik.touched.cv && formik.errors.cv && (
              <Typography variant="caption" color="error">{formik.errors.cv}</Typography>
            )}
          </Grid>
        </Grid>
        <Button type="submit" fullWidth sx={{ color: "white", backgroundColor: "#1c2125" ,'&:hover': {
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)', backgroundColor: "#1c2125" 
    }}}>Register</Button>
      </form>
    </div>
  );
};

export default JobSeekerForm;

