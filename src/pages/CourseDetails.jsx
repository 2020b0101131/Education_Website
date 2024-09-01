import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import { Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails, Divider, Box, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) return <Typography variant="h4" align="center">Course not found</Typography>;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <Card sx={{ backgroundColor: "#ffffff", maxWidth: 900, width: '100%', boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)", borderRadius: '12px', overflow: 'hidden' }}>
        <CardContent sx={{ padding: '2rem' }}>
          <Button
            onClick={() => navigate('/')}
            variant="contained"
            color="primary"
            startIcon={<ExpandMoreIcon />}
            sx={{ marginBottom: '20px', borderRadius: '8px' }}
          >
            Back to Home
          </Button>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
            {course.name}
          </Typography>
          <Box display="flex" alignItems="center" mb={3}>
            <SchoolIcon sx={{ marginRight: 1, color: 'primary.main' }} />
            <Typography variant="h6" sx={{ fontWeight: 'medium', color: '#555' }}>{course.instructor}</Typography>
          </Box>
          <Divider sx={{ mb: 3, borderColor: '#ddd' }} />
          <Typography variant="body1" paragraph sx={{ mb: 3, color: '#666' }}>
            {course.description}
          </Typography>
          
          <Box display="flex" alignItems="center" mb={2}>
            <CheckCircleOutlineIcon sx={{ marginRight: 1, color: 'success.main' }} />
            <Typography variant="body1" sx={{ color: '#666' }}>Status: {course.enrollmentStatus}</Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={2}>
            <AccessTimeIcon sx={{ marginRight: 1, color: 'info.main' }} />
            <Typography variant="body1" sx={{ color: '#666' }}>Duration: {course.duration}</Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={2}>
            <AccessTimeIcon sx={{ marginRight: 1, color: 'info.main' }} />
            <Typography variant="body1" sx={{ color: '#666' }}>Schedule: {course.schedule}</Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={2}>
            <PlaceIcon sx={{ marginRight: 1, color: 'warning.main' }} />
            <Typography variant="body1" sx={{ color: '#666' }}>Location: {course.location}</Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 3, color: '#666' }}>
            Prerequisites: {course.prerequisites.join(', ')}
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
            Syllabus:
          </Typography>
          {course.syllabus.map((week, index) => (
            <Accordion key={index} sx={{ backgroundColor: "#fafafa", borderRadius: '8px', boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)", marginBottom: 2 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333' }}>{`Week ${week.week} - ${week.topic}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  {week.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default CourseDetails;
