const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// Enable CORS to allow frontend to communicate with the backend
app.use(cors());

// Body parser for JSON requests
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const employeeRoutes = require('./routes/employees');

// Registering the routes
app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Hello, world! Server is running');
});

// Starting the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
