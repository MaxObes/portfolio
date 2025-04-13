import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import graphqlImg from '../assets/graphql.png';
import receiptImg from '../assets/receipt.png';

const projects = [
  {
    title: 'Accelerate Learning GraphQL UI',
    url: 'https://github.com/MaxObes/accelerate-learning-project',
    image: graphqlImg,
  },
  {
    title: 'Receipt Processing API',
    url: 'https://github.com/MaxObes/receipt-processor-challenge',
    image: receiptImg,
  },
];

const Projects = () => (
  <Container id="work" sx={{ py: 8 }}>
    <Typography variant="h4" component="h2" gutterBottom align="center">
      My Projects
    </Typography>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
      }}
    >
      {projects.map((project, index) => (
        <Box
          key={index}
          sx={{
            width: 250,
            minHeight: 220,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textAlign: 'center',
            textDecoration: 'none',
          }}
          component="a"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            sx={{
              width: '100%',
              height: 150,
              flexGrow: 1,
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 2,
              boxShadow: 1,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 4,
              },
            }}
          />
          <Typography
            variant="h6"
            sx={{
              mt: 1,
              color: 'text.primary',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            {project.title}
          </Typography>
        </Box>
      ))}
    </Box>
  </Container>
);

export default Projects;