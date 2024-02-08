import React from 'react';
import { Container,  Typography } from '@mui/material';
import SearchBox from './SearchBox';

const LandingPage = () => {
  return (
    <div>
      
      <Container sx={{
          mt: { xs: 5, sm: 5, md: 14 },
          
        }}>
        <Typography variant="h2" align="center" color="#1c2125" gutterBottom>
          Welcome to JobNexa
        </Typography>
        <Typography variant="h5" align="center" color="#1c2125" paragraph>
          Connect with your dream job or find the perfect candidate for your company.
        </Typography>
        <SearchBox/>
      </Container>
    </div>
  );
};


export default LandingPage;
