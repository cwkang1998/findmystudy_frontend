export default class OfflineQuizStorageService {
  constructor() {
    this.localStorage = window.localStorage;
  }

  saveQuizQuestions = questions => {
    this.localStorage.setItem('questions', questions);
  };

  getQuizQuestions = () => {
    let data = this.localStorage.getItem('questions');
    let questions = null;
    if (data != null) {
      questions = JSON.parse(data);
    }
    return questions;
  };

  saveStudentData = studentData => {
    this.localStorage.setItem('student', JSON.stringify(studentData));
  };

  getStudentData = () => {
    let data = this.localStorage.getItem('student');
    let studentData = null;
    if (data != null) {
      studentData = JSON.parse(data);
    }

    return studentData;
  };

  removeStudentData = () => {
    this.localStorage.removeItem('student');
  };

  resetStorage = () => {
    this.localStorage.clear();
  };
}
