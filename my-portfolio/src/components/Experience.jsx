import React from 'react';
import { Container, Box, Typography, Divider } from '@mui/material';

const experiences = [
  { role: 'Data Analytics Engineer', company: 'Breakthrough' },
  { role: 'Software Engineer - Full Stack', company: 'UW-Athletics' },
  { role: 'Teaching Assistant - CS 200', company: 'University of Wisconsin-Madison' },
  { role: 'Community Outreach/Engagement Lead', company: 'Google Student Developers @ UW-Madison' },
];

const Experience = () => (
  <Container id="experience" sx={{ py: 8 }}>
    <Typography variant="h4" component="h2" gutterBottom>
      Experience
    </Typography>
    {experiences.map(({ role, company }, idx) => (
      <Box key={idx} sx={{ mb: 3 }}>
        <Typography variant="h6">{role}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {company}
        </Typography>
        {idx < experiences.length - 1 && <Divider sx={{ mt: 2 }} />}
      </Box>
    ))}
  </Container>
);

export default Experience;