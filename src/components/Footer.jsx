import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/icons/J.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFC54C">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '60px', height: '60px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="15px" textAlign="center" pb="20px" fontFamily="Segoe UI">Gym Jeffery 2023</Typography>
  </Box>
);

export default Footer;
