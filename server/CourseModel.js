const mongoose = require('mongoose');

const versionSchema = new mongoose.Schema({
  timestamp: Number,
  editor: Number,
  contents: {
    lang: String,
    info: String,
    outline: String,
    professor: String,
    difficulty: String
  },
  approved: Boolean
});

const courseSchema = new mongoose.Schema({
  courseId: String,
  courseName: String,
  tags: [String],
  previous: [String],
  next: [String],
  versions: [versionSchema]
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
