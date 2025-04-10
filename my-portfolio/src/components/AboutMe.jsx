import React from 'react';
import { Container, Box, Typography, Avatar } from '@mui/material';
import badgersLogo from '../assets/Wisconsin_Badgers_logo.svg.png';

const AboutMe = () => (
  <Container id="about" sx={{ py: 8 }}>
    <Typography variant="h4" component="h2" gutterBottom>
      Who I am
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      Computer Science '25
    </Typography>

    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center', mt: 3 }}>
      <Box sx={{ flex: 1 }}>
        <Typography>
          I was born and raised in Appleton, WI, where I fell in love with any bit of technology I could find.
        </Typography>
        <Typography>
          I'm currently studying Computer Science & Data Science at the University of Wisconsin-Madison, where I expect to graduate May of 2025. There, I pride myself upon being a coach and mentor to my fellow students; whether it's through projects, leading hackathons, or even helping teach CS200.
        </Typography>
        <Typography>
          I'm always available to chat about technology, computer science, or future opportunities. Below, you will find an updated list of my past positions and current toolkit. Looking forward to hearing from you!
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