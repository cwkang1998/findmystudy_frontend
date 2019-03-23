const localStorage = window.localStorage;

class OfflineQuizStorageService {
  saveQuizQuestions = questions => {
    localStorage.setItem('questions', questions);
  };

  getQuizQuestions = () => {
    let data = localStorage.getItem('questions');
    let questions = null;
    if (data != null) {
      questions = JSON.parse(data);
    }
    return questions;
  };

  saveStudentData = studentData => {
    localStorage.setItem('student', studentData);
  };

  getStudentData = () => {
    let data = localStorage.getItem('student');
    let studentData = null;
    if (data != null) {
      studentData = JSON.parse(data);
    }

    return studentData;
  };

  removeStudentData = () => {
    localStorage.removeItem('student');
  };

  resetStorage = () => {
    localStorage.clear();
  };
}

export default {
  OfflineQuizStorageService
};
