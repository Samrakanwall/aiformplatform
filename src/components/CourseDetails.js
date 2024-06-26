import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Checkbox, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CourseDetails = ({ title, description, onReset }) => {
  return (
    <Box style={{ marginTop: 20 }}>
      <Typography variant="h5">Course title: {title}</Typography>
      <Typography variant="body1" style={{ marginTop: 10 }}>
        <strong>Course Description:</strong> {description}
      </Typography>
      <Typography variant="body1" style={{ marginTop: 10 }}>
        <strong>Course Objectives:</strong>
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Identify the key marketing strategies required to promote e-learning courses" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Understand the role of social media in promoting e-learning courses" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Learn how to use email marketing to drive course enrollments" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Develop effective content marketing strategies for e-learning courses" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Measure the success of e-learning marketing campaigns" />
        </ListItem>
      </List>
      <Typography variant="body1" style={{ marginTop: 10 }}>
        <strong>Course Tags:</strong> e-learning, marketing, social media, email marketing, content marketing
      </Typography>
      <Typography variant="body1" style={{ marginTop: 20 }}>
        Edit your course structure broken down into lessons, with topics within each lesson below
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Introduction to E-Learning Marketing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText primary="1.1 Overview of the e-learning industry" />
            </ListItem>
            <ListItem>
              <ListItemText primary="1.2 Key marketing challenges for e-learning courses" />
            </ListItem>
            <ListItem>
              <ListItemText primary="1.3 Understanding your target audience" />
            </ListItem>
          </List>
          <Typography variant="body1" style={{ marginTop: 10 }}>
            <strong>Quizzes:</strong>
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="1. What are the key marketing challenges for e-learning courses?" />
            </ListItem>
            <ListItem>
              <ListItemText primary="2. Why is it important to understand your target audience when marketing e-learning courses?" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Social Media Marketing for E-Learning</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText primary="2.1 Introduction to Social Media Marketing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="2.2 Developing a Social Media Strategy" />
            </ListItem>
            <ListItem>
              <ListItemText primary="2.3 Measuring Social Media Success" />
            </ListItem>
          </List>
          <Typography variant="body1" style={{ marginTop: 10 }}>
            <strong>Quizzes:</strong>
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="1. What is the importance of a social media strategy?" />
            </ListItem>
            <ListItem>
              <ListItemText primary="2. How do you measure social media success?" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Box display="flex" alignItems="center" style={{ marginTop: 20 }}>
        <Checkbox />
        <Typography variant="body1">Automatically write content for all pages</Typography>
      </Box>
      <Button variant="contained" color="primary" style={{ marginTop: 20 }} onClick={onReset}>
        Save & Generate Lessons
      </Button>
    </Box>
  );
};

export default CourseDetails;
