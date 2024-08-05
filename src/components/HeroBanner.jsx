import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    {/* The Box component serves as a wrapper component for most of the CSS utility needs. */}
    {/* Use typography to present your design and content as clearly and efficiently as possible. */}
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Jeffery Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="5px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="18px" fontFamily="BlinkMacSystemFont" lineHeight="50px">
    Wake up determined. Go to bed satisfied. – Dwayne ‘The Rock’ Johnson
      
    </Typography>
    <Typography fontSize="18px" fontFamily="BlinkMacSystemFont" lineHeight="50px">
   
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      {/* Stack is a container component for arranging elements vertically or horizontally. */}
      <a href="#exercises" style={{ marginTop: '20px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FFC03F', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
