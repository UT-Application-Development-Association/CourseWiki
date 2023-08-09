const express = require('express');
const app = express();
const CourseDAO = require('./CourseDAO');

app.post('/create_course', async (req, res) => {
    try {
      const { courseId, courseName, tags, previous, next } = req.body;
      const newCourse = await CourseDAO.createCourse(courseId, courseName, tags, previous, next);
      res.status(201).json(newCourse);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred: ' + error });
    }
});

app.get('/find_all', async (req, res) => {
    try{
        const allCourses = await CourseDAO.findAll();
        res.status(201).json(allCourses);
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred: ' + error });
      }
});

module.exports = app;