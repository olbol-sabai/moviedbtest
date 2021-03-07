import axios from 'axios';



export const MovieDBImageAxios = axios.create({
    baseURL: 'https://image.tmdb.org/t/p/w500'
})

export const MovieDBBaseAxios = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

