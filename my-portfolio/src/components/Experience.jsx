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
    details: ['Built reporting pipelines', 'Developed dashboards', 'Automated ETL processes']
  },
  {
    role: 'Software Engineer - Full Stack',
    company: 'UW-Athletics',
    details: ['Implemented ticketing system', 'Enhanced performance tracking features']
  },
  {
    role: 'Teaching Assistant - CS 200',
    company: 'University of Wisconsin-Madison',
    details: ['Led weekly discussion sections', 'Held office hours', 'Assisted in grading']
  },
  {
    role: 'Community Outreach/Engagement Lead',
    company: 'Google Student Developers @ UW-Madison',
    details: ['Organized tech talks', 'Engaged with local developers', 'Managed social media presence']
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
              {idx < experiences.length - 1 && <Divider sx={{ mt: 2 }} />}
            </Paper>
          </motion.div>
        );
      })}
    </Container>
  );
};

export default Experience;