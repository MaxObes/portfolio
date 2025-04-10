import React from 'react';
import { Box, Container, Typography, Avatar } from '@mui/material';
import introImage from '../assets/selfie.jpg';

const Intro = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Box display="flex" alignItems="center" flexDirection={{ xs: 'column', md: 'row' }}>
        <Avatar
          src={introImage}
          alt="Maxwell Oberbrunner"
          sx={{ width: 160, height: 160, mr: { md: 4 }, mb: { xs: 2, md: 0 } }}
        />
        <Box>
          <Typography variant="h4" component="h1">
            Hello! I am <strong>Maxwell Oberbrunner</strong>
          </Typography>
          <Typography variant="subtitle1">
            Alumni of University of Wisconsin-Madison 
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Intro;