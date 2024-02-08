import React, { useState } from 'react';
import {
  Container,
  Tabs,
  Tab,
  Box,
} from '@mui/material';
import JobSeekerForm from './JobSeeker'; 
import EmployerForm from './Employer';
import { PersonOutline as PersonIcon, Business as BusinessIcon } from '@mui/icons-material';

const RegisterScreen = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  <div style={{
    //backgroundImage: `url(${backgroundImage})`
    background: 'linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)',
    
    height: '100vh',
    display: 'flex',
    alignItems: 'center'
  }}>  
    <Container component="main" sx={{
      mt: { xs: 2, sm: 2 },
      mb: { xs: 2, sm: 2 },
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.125)',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      maxWidth: { xs: '90%', sm: '80%', md: '60%', lg:'50%' },
      width: '100%', 
      margin: 'auto',
      height: 'auto'
      
      
      
  }}>
      
        
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Job Seeker" icon={<PersonIcon />} />
          <Tab label="Company" icon={<BusinessIcon />} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <JobSeekerForm userType="jobSeeker" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EmployerForm userType="company" />
        </TabPanel>
      
    </Container>
    </div>   
  );
};


const TabPanel = ({ children, value, index }) => {
  return (
    <Box hidden={value !== index} sx={{ width: '100%' }}>
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </Box>
  );
};

export default RegisterScreen;
