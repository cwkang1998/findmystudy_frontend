class ApiService{
    API_URL = "localhost:5000";
    constructor(){

    }

    adminLogin = async () => {
        return await fetch(`${API_URL}/admin/login`);
    }

    adminSignup = async () => {
        return await fetch(`${API_URL}/admin/signup`);
    }

    getBooking = async () => {
        return await fetch(`${API_URL}/booking`);
    }

    createBooking = async () => {
        return await fetch(`${API_URL}/booking`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                student: 'Lee xin',
                phone_number: '911',
                email: 'unmc@edu.my',
                booking_time: 'date_time'
            })
        })
    }

    getUni = async () => {
        return await fetch(`${API_URL}/uni/:id`);
    }

    createUni = async () => {
        return await fetch(`${API_URL}/uni`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                name: 'unmc',
                description: 'asd',
                address: 'broga',
                country: 'malaysia'
            })
        })
    }

    updateUni = async () => {
        return await fetch(`${API_URL}/uni/:id`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'PUT',
            body: JSON.stringify({
                name: 'unmc',
                description: 'asd',
                address: 'broga',
                country: 'malaysia'
            })
        })
    }

    deleteUni = async () => {
        return await fetch(`${API_URL}/uni/:id`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'delete',
            })
    }

    getCourse = async () => {
        return await fetch(`${API_URL}/course/:id`);
    }

    createCourse = async () => {
        return await fetch(`${API_URL}/course`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                name: 'CS',
                university: 'UNMC',
                description: 'sumting',
                costs: '30,000rm'
            })
        })
    }

    updateUni = async () => {
        return await fetch(`${API_URL}/course/:id`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'PUT',
            body: JSON.stringify({
                name: 'CS',
                university: 'UNMC',
                description: 'sumting',
                costs: '30,000rm'
            })
        })
    }

    deleteCourse = async () => {
        return await fetch(`${API_URL}/course/:id`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'delete',
            })
    }

    getStudent = async () => {
        return await fetch(`${API_URL}/student/:id`);
    }

    createStudent = async () => {
        return await fetch(`${API_URL}/student`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                name: 'Adhik',
                dob: '1/9/2000', 
                gender: 'male',
            })
        })
    }

    getAllSurvey = async () => {
        return await fetch(`${API_URL}/survey`);
    }

    createSurvey = async () => {
        return await fetch(`${API_URL}/survey`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                no: '101',
                content: 'sumting',
                color: 'blue'
            })
        })
    }

    updateUni = async () => {
        return await fetch(`${API_URL}/survey/:id`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'PUT',
            body: JSON.stringify({
                no: '101',
                content: 'sumting',
                color: 'blue'
            })
        })
    }

}

