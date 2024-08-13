// src/app.js
const cors = require('cors');


const express = require('express');
const app = express();

// Middleware setup


// Enable CORS for all routes
app.use(cors());

// Middleware setup
app.use(express.json());
app.use(express.static('public'));



// Routes setup
const userRoutes = require('./routes/user/userRoutes');
app.use('/api/users', userRoutes);

const admissionDataRoutes= require('./routes/collegepage/admissionDataRoutes')
app.use('/api/admissions', admissionDataRoutes); 

const reviewDataRoutes= require('./routes/collegepage/collegeReview')
app.use('/api/reviews', reviewDataRoutes);

const tabDataRoutes =require('./routes/top10colleges/tabDataRoutes')
app.use('/api/top10colleges', tabDataRoutes);

const department=require('./routes/department/department')
app.use('/api/department',department)

const college=require('./routes/collegepage/collegeslist')
app.use('/api/collegelist',college)

const information=require('./routes/collegepage/information')
app.use('/api/information',information)


const blogs=require('./routes/blogs/blogs')
app.use('/api/blog',blogs)


 
module.exports = app;
