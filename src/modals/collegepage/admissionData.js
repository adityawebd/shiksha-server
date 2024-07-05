// src/models/courseModel.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for event data
const eventSchema = new Schema({
  event_name: { type: String, required: true },
  event_tag: { type: String, required: true },
  event_date: { type: Date, required: true }
});

// Define the schema for expired event data
const expiredEventSchema = new Schema({
  event_name: { type: String, required: true },
  event_date: { type: Date, required: true }
});

// Define the schema for cut off data table
const cutOffDataTableSchema = new Schema({
  courses: { type: String, required: true },
  cutoff_year1: { type: String, required: true },
  cutoff_year2: { type: String, required: true },
  cutoff_year3: { type: String, required: true },
  cutoff_year4: { type: String, required: true }
});

// Define the schema for cut off data
const cutOffDataSchema = new Schema({
  title: { type: String, required: true },
  para: { type: String, required: true },
  cutOffDataTable: [cutOffDataTableSchema],
  exam_name: { type: String, required: true },
  year: { type: String, required: true }
});

// Define the main course schema
const courseSchema = new Schema({
  // id: { type: Number, required: true },
  name: { type: String, required: true },
  className: { type: String, required: true },
  h5_1: { type: String, required: true },
  importantEventsTableData: [eventSchema],
  h5_2: { type: String, required: true },
  expiredEventsTableData: [expiredEventSchema],
  cutOffData: [cutOffDataSchema]
});

// Create the model
const InnerAdmissionData = mongoose.model('InnerAdmissionData', courseSchema);

module.exports = InnerAdmissionData;
