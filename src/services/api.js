import axios from "axios"

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjQzYmRjMWI5ODgyM2U4ZDk2NDJiNTMzMjU0NDljNCIsInN1YiI6IjY2MTUzNmNhM2Q3NDU0MDE4NTA5NmFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gTUJ5Td4fLu-iNy4vtrSfvaKXbLaPhZNsVdzRF8qHv0"

export const fetchPopularMovies = async () => {
    const url = "https://api.themoviedb.org/3/trending/movie/day"
    const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`
    }
    };
    const response = await axios.get(url, options)
    return response.data
}

export const fetchMoviesByName = async (query) => {
    
    const url = "https://api.themoviedb.org/3/search/movie"
    const options = {
        params: {
            query: query,
        },
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    }
    
    const response = await axios.get(url, options)
    return response.data
}
export const fetchMovieDetails = async (id) => {
    
    const url = `https://api.themoviedb.org/3/movie/${id}`
    const options = {
       
        headers: {
            Authorization:`Bearer ${API_KEY}`
        }
    }
    
    const response = await axios.get(url, options)
    return response.data
}
export const fetchMovieReviews = async (id) => {
    
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews`
    const options = {
       
        headers: {
            Authorization:`Bearer ${API_KEY}`
        }
    }
    
    const response = await axios.get(url, options)
    return response.data
}

export const fetchMovieCast = async (id) => {
    
    const url = `https://api.themoviedb.org/3/movie/${id}/credits`
    const options = {
       
        headers: {
            Authorization:`Bearer ${API_KEY}`
        }
    }
    
    const response = await axios.get(url, options)
    return response.data
}
