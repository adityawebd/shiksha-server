// src/app.js
const cors = require('cors');
const enforce = require('express-sslify');
const helmet = require('helmet');
const express = require('express');
const app = express();

// Middleware setup
app.use(helmet()); // Secure your app by setting various HTTP headers
// Only use enforce.HTTPS if you're not enforcing HTTPS in your reverse proxy (Nginx)
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// Serve static files from the 'public' directory if needed
// app.use(express.static('public'));

// Enable CORS for all routes
app.use(cors());
app.use((req, res, next) => {
    const ip = req.ip || req.socket.remoteAddress;
    console.log(`Request from IP: ${ip}`);
    next();
  }); 

// Middleware setup
app.use(express.json());

// Routes setup
const userRoutes = require('./routes/user/userRoutes');
app.use('/api/users', userRoutes);

const admissionDataRoutes = require('./routes/collegepage/admissionDataRoutes');
app.use('/api/admissions', admissionDataRoutes);

const reviewDataRoutes = require('./routes/collegepage/collegeReview');
app.use('/api/reviews', reviewDataRoutes);

const tabDataRoutes = require('./routes/top10colleges/tabDataRoutes');
app.use('/api/top10colleges', tabDataRoutes);

const department = require('./routes/department/department');
app.use('/api/department', department);

const college = require('./routes/collegepage/collegeslist');
app.use('/api/collegelist', college);

module.exports = app;
