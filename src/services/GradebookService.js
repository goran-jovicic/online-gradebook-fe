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

    createGradebook(newGradebook){
        return axios.post('/gradebooks', newGradebook)
    }

    deleteGradebook(id){
        return axios.delete(`/gradebooks/${id}`)
    }
}

export const gradebookService = new GradebookService()