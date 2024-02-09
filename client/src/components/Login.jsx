import React, { useState, useContext } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid
  
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    
    navigate('/landing')
    e.preventDefault();
    console.log(`Submitted: ${email}, ${password}`);
  };
  

  return (
     <div style={{
      //backgroundImage: `url(${backgroundImage})`
      background: 'linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center', 
      height: '91vh',
      flexWrap: 'wrap',
    }}>
    <Container sx={{
        mt: { xs: 2, sm: 2 },
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.125)',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        maxWidth: { xs: '90%', sm: '80%', md: '40%', lg:'40%' },
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
          onChange={(e)=>{setEmail(e.target.value)}}
          required
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={(e)=>{setPassword(e.target.value)}}
          required
        />
        
        <Button type="submit" fullWidth sx={{ color: "white", backgroundColor: "#1c2125" ,'&:hover': {
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)', backgroundColor: "#1c2125" 
    }}}>LogIn</Button>
      </form>
    </Container>
    </div>
  );
};

export default LoginForm;
