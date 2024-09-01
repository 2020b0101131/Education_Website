import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Container, Alert, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import bg from '../images/bg.jpeg'

const users = [
  { id: 101, name: 'Alice Johnson', email: 'alice@example.com', password: 'abc123' },
  // { id: 102, name: 'Bob Smith', email: 'bob@example.com', password: 'abc123' },
  // { id: 103, name: 'Saransh Chauhan', email: 'k.saranshchauhan@gmail.com', password: 'abc123' },
];


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // const user = users.find(user => user.email === email && user.password === password);
    
    if (users.find(user => user.email === email && user.password === password)) {
      navigate('/'); // Redirect to home page or dashboard
    } else if(users.find(user => user.email === email && user.password !== password)) {
      setError('Invalid password');
    }else if(users.find(user => user.email !== email && user.password === password)){
        setError('Invalid email');
    }else{
        setError('Invalid email and password');
    }
  };

  return (
    <div style={{ height: '100vh',
        backgroundImage: `url(${bg})`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }} >
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: '100vh',
        backgroundImage: `url(${bg})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
          backgroundColor: '#fafafa',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
          borderRadius: 4,
          width: '100%',
          maxWidth: 400,
        }}
      >
        <LockOutlinedIcon sx={{ fontSize: 60, color: '#3f51b5', mb: 2 }} />
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, borderRadius: '20px' }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
    </div>
  );
};

export default LoginPage;
