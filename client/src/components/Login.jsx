import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid
  
} from '@mui/material';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
    
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted:', formData);
  };

  return (
    <Container sx={{
        mt: { xs: 2, sm: 2 },
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
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        
        <TextField
          label="Email"
          type="email"
          name="email"
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={handleChange}
          required
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={handleChange}
          required
        />
        
          
        
          <Button type="submit" fullWidth sx={{ color: "white", backgroundColor: "#1c2125" }}>Login</Button>
      </form>
    </Container>
  );
};

export default LoginForm;
