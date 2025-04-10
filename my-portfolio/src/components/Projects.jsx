import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const projects = [
    {
      title: 'Insert Project 1',
      url: 'https://github.com/MaxObes/project1',
      image: '/path/to/project1-preview.jpg',
    },
    {
      title: 'Insert Project 2',
      url: 'https://github.com/MaxObes/project2',
      image: '/path/to/project2-preview.jpg',
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
          component="a"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            p: 2,
            width: 250,
            height: 150,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            borderRadius: 2,
            textDecoration: 'none',
            boxShadow: 1,
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 4,
            },
          }}
        >
        <Typography
          variant="h6"
          sx={{
            // backgroundColor: 'rgba(0, 0, 0, 0.6)',
            width: '100%',
            textAlign: 'center',
            p: 1,
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