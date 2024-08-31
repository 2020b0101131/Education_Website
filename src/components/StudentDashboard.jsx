import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markCourseAsCompleted } from '../redux/coursesSlice';
import { Card, CardContent, Typography, Button, Grid, LinearProgress, Box } from '@mui/material';

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.enrolledCourses);

  const handleCompleteCourse = (courseId) => {
    dispatch(markCourseAsCompleted(courseId));
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        My Enrolled Courses
      </Typography>
      <Grid container spacing={4}>
        {courses.map(course => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
              <CardContent>
                <Box sx={{ height: '200px', overflow: 'hidden', borderRadius: '8px', marginBottom: '15px' }}>
                  <img src={course.thumbnail} alt={course.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
                <Typography variant="h5" component="div" gutterBottom>
                  {course.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Instructor: {course.instructor}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Due Date: {course.dueDate}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={course.progress}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: '#e0e0e0',
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 5,
                      backgroundColor: course.progress === 100 ? 'green' : '#3f51b5',
                    },
                    my: 2,
                  }}
                />
                <Button
                  variant="contained"
                  color={course.completed ? "success" : "primary"}
                  fullWidth
                  sx={{
                    textTransform: 'none',
                    padding: '10px',
                    backgroundColor: course.completed ? 'green' : 'primary.main',
                    '&:hover': {
                      backgroundColor: course.completed ? '#388e3c' : '#303f9f',
                    },
                  }}
                  disabled={course.completed}
                  onClick={() => handleCompleteCourse(course.id)}
                >
                  {course.completed ? 'Completed' : 'Mark as Completed'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StudentDashboard;
