import React from 'react';
import {
  Container,
  Typography,
  Divider,
  Paper,
  IconButton,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Box
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    role: 'Data Analytics Engineer',
    company: 'Breakthrough',
    details: ['Participated in daily stand-up and two-week Jira sprints, organizing tickets and ensuring quality tested code reaches production.',
        'Minimize cross-dependencies across large-scale DBT Cloud environment, reducing development time and avoid unexpected model changes by 65%.',
        'Ran regression tests and SQL queries inside Google BigQuery to verify schema changes to downstream models.',
        'Presented 10-minute slideshow on contributions from internship to entire company staff, adapting the presentation and verbiage to reach across all audiences.'
        ]
  },
  {
    role: 'Software Engineer - Full Stack',
    company: 'UW-Athletics',
    details: ['Participated in DSU and developed multiple internal webpages for Badger Athletics concurrently alongside two other student interns.',
        'Experience in developing backend HTTP methods to communicate with Microsoft SQL server and display results directly into C# ASP.NET webpages built with bootstrap, SASS, and javascript.',
        'Utilized MVC design methodology to organize data models, webpage views, and HTTP routing controllers.'
        ]
  },
  {
    role: 'Teaching Assistant - CS 200',
    company: 'University of Wisconsin-Madison',
    details: ['Highly competitive opportunity to collaborate with Professor Jim Williams of University of Wisconsin-Madison to aid students in completing weekly lab material.',
        'Effectively communicate ideas in order to provide 10 office hours a week as a resource to students with questions to coding projects or assignments.' 
        ]
  },
  {
    role: 'Community Outreach/Engagement Lead',
    company: 'Google Student Developers @ UW-Madison',
    details: ['Manage large-scale projects such as future meetings, hackathons, and other events across students at UW-Madison.',
        'Facilitate interview/Q&A between current Google Software Engineers and groups of 50+ students; provide knowledge about the technology industry and improve technical skills.',
        'Innovate and create inspiring events to improve attendance to extend Google’s outreach to the campus.'
        ]
  },
];

const Experience = () => {
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndices, setOpenIndices] = React.useState([]);

  const handleToggle = (idx) => {
    setOpenIndices(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <Container id="experience" sx={{ py: 8 }} ref={ref} maxWidth="md">
      <Typography
        variant="sectionHeader"
        component="h2"
        gutterBottom
        align="center"
        sx={{ mb: 4 }}
      >
        Experience
      </Typography>
      {experiences.map(({ role, company, details }, idx) => {
        const open = openIndices.includes(idx);
        return (
          <motion.div
            key={idx}
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              delay: idx * 0.2
            }}
          >
            <Paper
              sx={{
                mb: 3,
                p: 3,
                borderRadius: 3,
                boxShadow: 4,
                backgroundColor: 'background.default',
              }}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      color: 'primary.main',
                      letterSpacing: '0.5px',
                      fontFamily: 'Roboto Slab, serif'
                    }}
                  >
                    {role}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{
                      fontStyle: 'italic',
                      fontSize: '1rem',
                      letterSpacing: '0.3px',
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    {company}
                  </Typography>
                </Box>
                <IconButton
                  onClick={() => handleToggle(idx)}
                  sx={{
                    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <ExpandMore />
                </IconButton>
              </Box>
              <Collapse in={open}>
                <List dense>
                  {details.map((item, i) => (
                    <ListItem key={i}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
              {idx < experiences.length && <Divider sx={{ mt: 2 }} />}
            </Paper>
          </motion.div>
        );
      })}
    </Container>
  );
};

export default Experience;