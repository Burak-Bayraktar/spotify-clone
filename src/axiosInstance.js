import axios from 'axios'

const headers = {
    'Authorization': `Bearer ${localStorage.getItem('access-token')}`,
    'Content-Type': 'application/json'
}

const axiosInstance = axios.create({
   baseURL: process.env.REACT_APP_API_URL,
   headers
})

export default axiosInstance