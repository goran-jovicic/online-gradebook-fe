import axios from 'axios'

export default class ProfessorService {

    constructor() {
        axios.defaults.baseURL = `http://localhost:8000/api`
    }

    getProfessors() {
        return axios.get('/teachers')
    }

    getSingleProfessor(id) {
        return axios.get(`/teachers/${id}`)
    }
}

export const professorService = new ProfessorService()