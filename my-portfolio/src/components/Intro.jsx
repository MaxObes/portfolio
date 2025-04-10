import React from 'react';
import { Box, Container, Typography, Avatar } from '@mui/material';
import introImage from '../assets/selfie.jpg';
import Typewriter from './Typewriter';
import moireBackground from '../assets/3947.jpg';

const Intro = () => {
    return (
        <Container disableGutters maxWidth={false}>
            <Box
                sx={{
                    backgroundImage: `url(${moireBackground})`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    py: 8,
                }}
            >
                <Container sx={{ pt: 5 }}>
                    <Box
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="center"
                        textAlign="center"
                        flexDirection={{ xs: 'column', md: 'row' }}
                        sx={{
                            alignItems: { xs: 'center', md: 'flex-start' },
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                    >
                        <Avatar
                            src={introImage}
                            alt="Maxwell Oberbrunner"
                            sx={{
                                width: 400,
                                height: 400,
                                mb: { xs: 2, md: 0 },
                                mr: { md: 4, xs: 0 },
                                boxShadow: 6,
                                '@media (max-width:400px)': {
                                    width: 250,
                                    height: 250,
                                }
                            }}
                        />
                        <Box sx={{ textAlign: 'left', mt: 10 }}>
                            <Typography
                                component="h1"
                                sx={{
                                    fontSize: '3rem',
                                    fontWeight: 600,
                                    color: 'white',
                                    textShadow: '2px 2px 6px rgba(0,0,0,0.6)',
                                    mb: 1,
                                    '@media (max-width:400px)': {
                                        fontSize: '2.2rem',
                                    }
                                }}
                            >
                                <Typewriter text="Hello! I'm Maxwell Oberbrunner" delay={50} />
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontSize: '1.5rem',
                                    ml: 0.4,
                                    fontWeight: 500,
                                    letterSpacing: 1,
                                    color: '#f5f5f5',
                                    textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
                                }}
                            >
                                Alumni of University of Wisconsin-Madison
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                gutterBottom
                                sx={{
                                    fontSize: '1rem',
                                    ml: 0.4,
                                    fontStyle: 'italic',
                                    color: '#dddddd',
                                    textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
                                }}
                            >
                                Computer Science, Data Science, and Economic Analytics
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Container>
    );
};

export default Intro;