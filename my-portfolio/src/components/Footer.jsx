import React from 'react';
import { Box, Container, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => (
  <Box component="footer" id="foot" sx={{ py: 4, textAlign: 'center', bgcolor: 'background.paper' }}>
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton component="a" href="mailto:moberbrunner@wisc.edu" color="primary">
          <EmailIcon fontSize="large" />
        </IconButton>
        <IconButton component="a" href="https://github.com/MaxObes" color="primary">
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton component="a" href="https://www.linkedin.com/in/maxoberbrunner/" color="primary">
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </Box>
    </Container>
  </Box>
);

export default Footer;
