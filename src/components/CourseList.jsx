import React, { useState } from 'react';
import { courses } from '../data/courses';
import { Link } from 'react-router-dom';
import { TextField, Card, CardContent, Typography, Button, Grid, Box, IconButton, Badge } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CourseList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [likes, setLikes] = useState({});

  const handleLike = (courseId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [courseId]: (prevLikes[courseId] || 0) + 1,
    }));
  };

  const filteredCourses = courses.filter(course => 
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#F0F4F8', minHeight: '100vh' }}>
      <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', color: '#333' }}>
        Explore Our Courses
      </Typography>

      <Card sx={{ padding: '2rem', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff', borderRadius: '12px' }}>
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
                <Card 
                  sx={{ 
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', 
                    borderRadius: '12px', 
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', 
                    '&:hover': { 
                      transform: 'scale(1.05)', 
                      boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.15)' 
                    } 
                  }}>
                  <CardContent>
                    <Box sx={{ height: '180px', overflow: 'hidden', borderRadius: '8px', marginBottom: '15px' }}>
                      <img src={course.thumbnail} alt={course.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
                      {course.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '15px' }}>
                      Instructor: {course.instructor}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                      <IconButton
                        onClick={() => handleLike(course.id)}
                        sx={{
                          color: likes[course.id] ? 'red' : 'gray',
                          '&:hover': {
                            color: 'red',
                          },
                        }}
                      >
                        <Badge badgeContent={likes[course.id] || 0} color="error">
                          <FavoriteIcon />
                        </Badge>
                      </IconButton>
                    </Box>
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
                        backgroundColor: '#1976d2',
                        '&:hover': {
                          backgroundColor: '#1565c0',
                        },
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
