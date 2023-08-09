const courseModel = require('./CourseModel');

class CourseDAO {
  async createCourse(courseId, courseName, tags, previous, next) {
    const course = new courseModel({
      courseId,
      courseName,
      tags,
      previous,
      next
    });
    return await course.save();
  }

  async findAll() {
    return await courseModel.find({});
  }

  async updateCourse(courseId, courseName, tags, previous, next) {

  }

  async addNewVersion(courseId, editor, contents) {

  }
   
  async approveVersion(courseId, timestamp) {

  }

  async findOne(courseId) {

  }

  async findByKeyWord(str) {

  }

  async deleteVersion(courseId, timestamp) {

  }

  async deleteCourse(courseId) {

  }
}

module.exports = new CourseDAO();
