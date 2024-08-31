import React from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../data/courses';
import { Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails, Divider, Box, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) return <Typography variant="h4">Course not found</Typography>;

  return (
    <Card sx={{ backgroundColor: "#f9f9f9", margin: "20px auto", padding: "20px", maxWidth: 800, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)" }}>
      <CardContent>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          {course.name}
        </Typography>
        <Box display="flex" alignItems="center" mb={3}>
          <SchoolIcon sx={{ marginRight: 1, color: 'primary.main' }} />
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>{course.instructor}</Typography>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {course.description}
        </Typography>
        
        <Box display="flex" alignItems="center" mb={2}>
          <CheckCircleOutlineIcon sx={{ marginRight: 1, color: 'success.main' }} />
          <Typography variant="body1">Status: {course.enrollmentStatus}</Typography>
        </Box>

        <Box display="flex" alignItems="center" mb={2}>
          <AccessTimeIcon sx={{ marginRight: 1, color: 'info.main' }} />
          <Typography variant="body1">Duration: {course.duration}</Typography>
        </Box>

        <Box display="flex" alignItems="center" mb={2}>
          <AccessTimeIcon sx={{ marginRight: 1, color: 'info.main' }} />
          <Typography variant="body1">Schedule: {course.schedule}</Typography>
        </Box>

        <Box display="flex" alignItems="center" mb={2}>
          <PlaceIcon sx={{ marginRight: 1, color: 'warning.main' }} />
          <Typography variant="body1">Location: {course.location}</Typography>
        </Box>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Prerequisites: {course.prerequisites.join(', ')}
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mb: 2, fontWeight: 'bold' }}>
          Syllabus:
        </Typography>
        {course.syllabus.map((week, index) => (
          <Accordion key={index} sx={{ backgroundColor: "white", borderRadius: 2, boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)", marginBottom: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{`Week ${week.week} - ${week.topic}`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                {week.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  );
};

export default CourseDetails;
