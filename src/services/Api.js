const API_URL = 'http://localhost:5000';

export default class ApiService {
  /**
   * Login as an admin
   * @param username
   * @param password
   */
  adminLogin = async (username, password) => {
    return await fetch(`${API_URL}/admin/login`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: 'POST',
      body: {
        username: username,
        password: password
      }
    });
  };

  /**
   * Create an admin account
   * Only accessible by Admin accounts.
   * @param token authorization token
   * @param username
   * @param password
   */
  adminSignup = async (token, username, password) => {
    return await fetch(`${API_URL}/admin/signup`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token}`
      },
      method: 'POST',
      body: {
        username: username,
        password: password
      }
    });
  };

  /**
   * Gets all bookings.
   * Only accessible by Admin accounts.
   * @param token authorization token
   */
  getAllBookings = async token => {
    return await fetch(`${API_URL}/booking`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  /**
   * Creates a new booking.
   * @param data New booking data.
   * Data must contain _id of student and booking time.
   * Data must contain either phone number OR email.
   * Data format: {student, phone_number, email, booking_time}.
   */
  createBooking = async data => {
    return await fetch(`${API_URL}/booking`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: 'POST',
      body: JSON.stringify(data)
    });
  };

  /**
   * Get all or specific set of Universities based on query params.
   * @param nameQuery string to query for universities
   */
  getAllUnis = async (nameQuery = '') => {
    return await fetch(`${API_URL}/uni?q=${nameQuery}`);
  };

  /**
   * Get a University
   * @param id university id
   */
  getUni = async id => {
    return await fetch(`${API_URL}/uni/${id}`);
  };

  /**
   * Create a new University entry.
   * Only accessible by Admin accounts.
   * @param token authorization token
   */
  createUni = async (token, data) => {
    return await fetch(`${API_URL}/uni`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token}`
      },
      method: 'POST',
      body: JSON.stringify(data)
    });
  };

  /**
   * Update an existing new University entry
   * Only accessible by Admin accounts
   * @param token authorization token
   * @param id university id
   * @param data updating datas
   */
  updateUni = async (token, id, data) => {
    return await fetch(`${API_URL}/uni/${id}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token}`
      },
      method: 'PUT',
      body: JSON.stringify(data)
    });
  };

  /**
   * Delete an existing new University entry
   * Only accessible by Admin accounts
   * @param token authorization token
   * @param id university id
   */
  deleteUni = async (token, id) => {
    return await fetch(`${API_URL}/uni/${id}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token}`
      },
      method: 'DELETE'
    });
  };

  /**
   * Get all students.
   * Only accessible by Admin accounts.
   * @param token authorization token
   */
  getAllStudents = async token => {
    return await fetch(`${API_URL}/student`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  /**
   * Get a specific student.
   * Only accessible by Admin accounts.
   * @param token authorization token.
   * @param id id of student.
   */
  getStudent = async (token, id) => {
    return await fetch(`${API_URL}/student/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  /**
   * Create a new student record
   * @param data data for the new student
   */
  createStudent = async data => {
    return await fetch(`${API_URL}/student`, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify(data)
    });
  };

  /**
   * Update a student record
   * @param id _id of the student
   * @param data new data for the student
   */
  updateStudent = async (id, data) => {
    return await fetch(`${API_URL}/student/${id}`, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'PUT',
      body: JSON.stringify(data)
    });
  };

  /**
   * Get all quiz questions
   */
  getAllQuiz = async () => {
    return await fetch(`${API_URL}/survey`);
  };

  /**
   * Create a new quiz questions
   * Only accessible by Admin accounts.
   * @param token authorization token.
   * @param data data for the new questions
   */
  createQuiz = async (token, data) => {
    return await fetch(`${API_URL}/survey`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token}`
      },
      method: 'POST',
      body: JSON.stringify(data)
    });
  };

  /**
   * update a pre-existing questions
   * Only accessible by Admin accounts.
   * @param token authorization token.
   * @param id id for the quiz questions
   * @param data updated data for the questions
   */
  updateUni = async (token, id, data) => {
    return await fetch(`${API_URL}/survey/${id}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token}`
      },
      method: 'PUT',
      body: JSON.stringify(data)
    });
  };

  /**
   * Delete a quiz question
   * Only accessible by Admin accounts.
   * @param token authorization token.
   * @param id id for the quiz questions
   */
  deleteQuiz = async (token, id) => {
    return await fetch(`${API_URL}/survey/${id}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token}`
      },
      method: 'DELETE'
    });
  };
}
