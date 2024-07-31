const mongoose = require('mongoose');
const { Schema } = mongoose;

const CollegeSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  universitytype: {
    type: String,
    required: true
  },
  Estd: {
    type: String,
    required: true
  },
  collageIcon: {
    type: Array,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  shortAddress: {
    type: String,
    required: true
  },
  shortDiscription: {
    type: String,
    required: true
  },
},{
    timestamps: true,
  
});

const College = mongoose.model('College', CollegeSchema);

module.exports = College;