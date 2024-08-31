import reactNativeImg from '../images/reactNative.jpg';
import nodeJsImg from '../images/node.png';
import mernImg from '../images/fullStack.png';
import algorithmsImg from '../images/dsa.png';
import machineLearningImg from '../images/ml.png';
import cyberSecurityImg from '../images/cyberSecurity.jpeg';

export const courses = [
  {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'Learn the basics of React Native development...',
    enrollmentStatus: 'Open',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      { week: 1, topic: 'Introduction to React Native', content: 'Overview of React Native...' },
      { week: 2, topic: 'Building Your First App', content: 'Creating a simple mobile app...' },
    ],
    thumbnail: reactNativeImg, 
  },
  {
    id: 2,
    name: 'Advanced Node.js',
    instructor: 'Jane Smith',
    description: 'Deep dive into Node.js for advanced backend development...',
    enrollmentStatus: 'Closed',
    duration: '10 weeks',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['Intermediate JavaScript', 'Basic understanding of Node.js'],
    syllabus: [
      { week: 1, topic: 'Advanced Asynchronous Programming', content: 'Exploring async/await, promises...' },
      { week: 2, topic: 'Building REST APIs', content: 'Designing and implementing RESTful services...' },
    ],
    thumbnail: nodeJsImg, 
  },

  {
    id: 3,
    name: 'Full-Stack Development (MERN)',
    instructor: 'Emily Johnson',
    description: 'Become a full-stack developer with MongoDB, Express, React, and Node.js...',
    enrollmentStatus: 'Open',
    duration: '12 weeks',
    schedule: 'Saturdays, 10:00 AM - 1:00 PM',
    location: 'In-person at ABC Coding Bootcamp',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with web development'],
    syllabus: [
      { week: 1, topic: 'Introduction to MERN Stack', content: 'Overview of MongoDB, Express, React, and Node.js...' },
      { week: 2, topic: 'Setting Up Your Development Environment', content: 'Installing necessary tools and libraries...' },
    ],
    thumbnail: mernImg, 
  },
  {
    id: 4,
    name: 'Data Structures and Algorithms',
    instructor: 'Michael Brown',
    description: 'Master data structures and algorithms for efficient coding...',
    enrollmentStatus: 'Open',
    duration: '8 weeks',
    schedule: 'Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic programming knowledge'],
    syllabus: [
      { week: 1, topic: 'Introduction to Data Structures', content: 'Understanding arrays, linked lists, stacks...' },
      { week: 2, topic: 'Algorithms Basics', content: 'Sorting algorithms, time complexity...' },
    ],
    thumbnail: algorithmsImg, 
  },
  {
    id: 5,
    name: 'Machine Learning',
    instructor: 'Sarah Davis',
    description: 'Get started with machine learning concepts and applications...',
    enrollmentStatus: 'Open',
    duration: '6 weeks',
    schedule: 'Fridays, 5:00 PM - 7:00 PM',
    location: 'Online',
    prerequisites: ['Basic Python knowledge', 'Understanding of statistics'],
    syllabus: [
      { week: 1, topic: 'Introduction to Machine Learning', content: 'Overview of machine learning, types of learning...' },
      { week: 2, topic: 'Supervised Learning', content: 'Understanding regression, classification, and more...' },
    ],
    thumbnail: machineLearningImg, 
  },
  {
    id: 6,
    name: 'Introduction to Cybersecurity',
    instructor: 'David Martinez',
    description: 'Learn the fundamentals of cybersecurity and how to protect systems...',
    enrollmentStatus: 'Open',
    duration: '8 weeks',
    schedule: 'Tuesdays, 4:00 PM - 6:00 PM',
    location: 'Online',
    prerequisites: ['Basic understanding of computer networks'],
    syllabus: [
      { week: 1, topic: 'Introduction to Cybersecurity', content: 'Overview of cybersecurity concepts, threats...' },
      { week: 2, topic: 'Network Security', content: 'Understanding firewalls, VPNs, and secure protocols...' },
    ],
    thumbnail: cyberSecurityImg, 
  },
];
