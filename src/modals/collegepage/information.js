const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for major updates
const majorUpdateSchema = new Schema({
  id: { type: Number, required: true },
  list_item: { type: String, required: true }
});

// Define the schema for notifications
const notificationSchema = new Schema({
  id: { type: Number, required: true },
  date: { type: String, required: true },
  link: { type: String, default: "" },
  title: { type: String, required: true }
});

// Define the schema for author paragraphs
const authorParaSchema = new Schema({
  id: { type: Number, required: true },
  para: { type: String, required: true }
});

// Define the main schema for the data
const infoSchema = new Schema({
  id: { type: Number, required: true },
  college: { type: String, required: true },
  page_title: { type: String, required: true },
  para_1: { type: String, required: true },
  major_updates: [majorUpdateSchema],
  notifications: [notificationSchema],
  authorImgSrc: { type: String, default: "" },
  author_name: { type: String, required: true },
  author_para: [authorParaSchema],
  h5: { type: String, required: true },
  h5_para: { type: String, required: true }
});

// Create a model from the schema
const Information = mongoose.model('information', infoSchema);

module.exports = Information;
