import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentDashboard from './components/StudentDashboard';
import CourseList from './components/CourseList';
import CourseDetails from './pages/CourseDetails';
import LoginPage from './pages/Login';
import Layout from './components/Layout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><CourseList /></Layout>} />
          <Route path="/course/:id" element={<Layout><CourseDetails /></Layout>} />
          <Route path="/dashboard" element={<Layout><StudentDashboard /></Layout>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
