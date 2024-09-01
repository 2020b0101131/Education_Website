import React, { useState } from 'react';
import { courses } from '../data/courses';
import { Link } from 'react-router-dom';
import { TextField, Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';

const CourseList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course => 
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ padding: '0' }}>
      <Card sx={{ padding: '2rem', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', backgroundColor: '#f0f0f0' }}>
        <CardContent>
          <TextField
            label="Search by course name or instructor"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              marginBottom: '2rem',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#fff',
              },
            }}
          />
          <Grid container spacing={4}>
            {filteredCourses.map(course => (
              <Grid item xs={12} sm={6} md={4} key={course.id}>
                <Card sx={{ boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', borderRadius: '8px', transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                  <CardContent>
                    <Box sx={{ height: '180px', overflow: 'hidden', borderRadius: '8px', marginBottom: '15px' }}>
                      <img src={course.thumbnail} alt={course.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                      {course.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '15px' }}>
                      Instructor: {course.instructor}
                    </Typography>
                    <Button
                      component={Link}
                      to={`/course/${course.id}`}
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{
                        textTransform: 'none',
                        borderRadius: '8px',
                        padding: '10px',
                      }}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CourseList;
