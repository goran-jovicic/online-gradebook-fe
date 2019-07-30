import axios from 'axios'

export default class GradebookService {

    constructor() {
        axios.defaults.baseURL = `http://localhost:8000/api`
    }

    getGradebooks() {
        return axios.get('/gradebooks')
    }

    getSingleGradebook(id) {
        return axios.get(`/gradebooks/${id}`)
    }
}

export const gradebookService = new GradebookService()