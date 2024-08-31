import { createSlice } from '@reduxjs/toolkit';
import reactNativeImg from '../images/reactNative.jpg';
import nodeJsImg from '../images/node.png';
const initialState = {
  enrolledCourses: [
    {
      id: 1,
      name: 'Introduction to React Native',
      instructor: 'John Doe',
      thumbnail: reactNativeImg,
      dueDate: '2024-09-01',
      progress: 50, 
      completed: false,
    },
    {
      id: 2,
      name: 'Advanced Node',
      instructor: 'Jane Smith',
      thumbnail: nodeJsImg,
      dueDate: '2024-09-15',
      progress: 70,
      completed: false,
    },

  ],
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    markCourseAsCompleted: (state, action) => {
      const course = state.enrolledCourses.find(course => course.id === action.payload);
      if (course) {
        course.completed = true;
        course.progress = 100;
      }
    },
  },
});

export const { markCourseAsCompleted } = coursesSlice.actions;

export default coursesSlice.reducer;
