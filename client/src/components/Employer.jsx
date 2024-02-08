import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import{ TextField , Typography} from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const validationSchema = Yup.object({
  companyName: Yup.string().required('Company Name is required'),
  address: Yup.string().required('Address is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
  phone: Yup.string().required('Phone Number is required'),
  website: Yup.string().url('Invalid URL format')
});

const EmployerForm = () => {
  const formik = useFormik({
    initialValues: {
      companyName: '',
      address: '',
      email: '',
      password: '',
      phone: '',
      website: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      // Handle form submission here
      console.log(values);
    }
  });

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
         SignUp Your Company Today!
    </Typography>
    <form onSubmit={formik.handleSubmit}>
      <TextField
        label="Company Name"
        name="companyName"
        fullWidth
        margin="none"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.companyName}
        error={formik.touched.companyName && Boolean(formik.errors.companyName)}
        helperText={formik.touched.companyName && formik.errors.companyName}
        size="small"
      />
      <TextField
        label="Address"
        name="address"
        fullWidth
        margin="dense"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.address}
        error={formik.touched.address && Boolean(formik.errors.address)}
        helperText={formik.touched.address && formik.errors.address}
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
        <Grid item xs={12} sm={6}>
          <TextField
            label="Website"
            name="website"
            fullWidth
            margin="dense"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.website}
            error={formik.touched.website && Boolean(formik.errors.website)}
            helperText={formik.touched.website && formik.errors.website}
            size="small"
          />
        </Grid>
      </Grid>
      <Button type="submit" fullWidth sx={{ color: "white", backgroundColor: "#1c2125" ,'&:hover': {
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)', backgroundColor: "#1c2125" 
    }}}>Register</Button>
    </form>
    </div>
  );
};

export default EmployerForm;
