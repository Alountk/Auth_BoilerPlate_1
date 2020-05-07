import axios from 'axios';

const baserUrl = process.env.REACT_APP_BASE_URL;

export const axiosInstance = axios.create({
    baseURL: baserUrl,
    withCredentials:true
})

axiosInstance.interceptors.response.use(
    (response)=>{
        return response.data;
    },
    (error)=>{
        return Promise.reject(error);
    }
);

