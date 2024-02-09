import React from 'react';
import { Container,  Typography } from '@mui/material';
import SearchBox from './SearchBox';

const LandingPage = () => {
  
  return (
    <div style={{
      backgroundImage: `url(${require('../Assets/img.jpg')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor:'hsla(215,0%,100%,1)',
    // backgroundImage:
    // `radial-gradient(at 80% 0%, hsla(189,83%,45%,1) 0px, transparent 50%),
    // radial-gradient(at 19% 98%, hsla(22,100%,77%,1) 0px, transparent 50%),
    // radial-gradient(at 0% 1%, hsla(242,100%,70%,1) 0px, transparent 50%),
    // radial-gradient(at 98% 98%, hsla(343,100%,76%,1) 0px, transparent 50%)`,
      
      height: '91vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      
      <Container >
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
