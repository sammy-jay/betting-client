import axios from "axios";
const API = axios.create({baseURL: 'https://larva-betting-server.herokuapp.com/api/v1', headers:{
    'Access-Control-Allow-Origin': "*"
}})


API.interceptors.request.use((req) => {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile'))?.token}`
        return req
    })


export const signIn = (credentials) => API.post('/auth/signin', credentials)
export const signUp = (credentials) => API.post('/auth/signup', credentials)
