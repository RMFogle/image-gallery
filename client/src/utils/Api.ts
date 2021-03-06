import axios from "axios"

export const BASE_API_URL = 'http://localhost:5000/image';

export const postAPI = async (url: string, post: object, token?:string) => {
    const res = await axios.post(`/api/${url}`, post, {
        headers: { Authorization: token as string }
    })

    return res; 
}

export const getAPI = async (url: string, token?:string) => {
    const res = await axios.get(`/api/${url}`, {
        headers: { Authorization: token as string }
    })

    return res;
}

export const deleteAPI = async (url: string, token?:string) => {
    const res = await axios.delete(`/api/${url}`, {
        headers: { Authorization: token as string}
    })

    return res; 
}