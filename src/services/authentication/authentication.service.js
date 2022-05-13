import axios from 'axios'
import { base_url } from '@/config/base_url'
import apiRoute from '../api.route'

export async function registerAccount(data){
    return axios.post (base_url+apiRoute.register, data)
        .then((response) => {
            const data = response.data
            return data
        })
        .catch((error) => {
            const data = { status: false, response: error }
            return data
        })
}