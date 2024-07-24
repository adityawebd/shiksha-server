const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for colleges
const CollegeSchema = new Schema({
  ranking: { type: String, required: true },
  college_name: { type: String, required: true },
  cut_off: { type: String, required: true },
  deadline: { type: String, required: true },
  college_fees: { type: String, required: true }
});

// Define the schema for tabs
const TabSchema = new Schema({
  eventkey: { type: String, required: true },
  classname: { type: String, required: true },
  title: { type: String, required: true },
  colleges: [CollegeSchema]
});

// Create the models
// const College = mongoose.model('College', CollegeSchema);
const TabData = mongoose.model('tabdatas', TabSchema);

module.exports = TabData ;
