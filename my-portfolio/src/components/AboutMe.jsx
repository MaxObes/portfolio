import React from 'react';
import { Container, Box, Typography, Avatar } from '@mui/material';
import badgersLogo from '../assets/Wisconsin_Badgers_logo.svg.png';

const AboutMe = () => (
  <Container id="about" sx={{ py: 8 }}>
    {/* <Typography variant="sectionHeader" component="h2" gutterBottom>
      Who I am
    </Typography> */}

    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center'}}>
      <Box sx={{ flex: 1 }}>
      <Typography
          sx={{
            fontSize: 20,
            color: 'text.primary',
            lineHeight: 1.6,
            letterSpacing: '1px',
            px: { xs: 1, sm: 2 },
            textAlign: 'justify'
          }}
        >
          
          I was born and raised in Northern Wisconsin, where I fell in love with any bit of technology I could find.
          I'm always available to chat about technology, computer science, or future opportunities. Below, you will find an updated 
          list of my past positions and side projects! 
          
        </Typography>
      </Box>
      <Avatar
        src={badgersLogo}
        alt="UW Logo"
        variant="square"
        sx={{ width: 185, height: 170 }}
      />
    </Box>
  </Container>
);

export default AboutMe;