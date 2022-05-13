import axios from '@/config/axios'
import { base_url } from '@/config/base_url'
import apiRoute from '../api.route'

export async function getDataChecklist(){
    return axios.get(base_url+apiRoute.checklist)
        .then((response) => {
            const data = response.data
            return data
        })
        .catch((error) => {
            const data = { status: false, response: error }
            return data
        })
}

export async function getSelectedDataChecklist(id){
    return axios.get(base_url+apiRoute.checklist+`/${id}/item`)
        .then((response) => {
            const data = response.data
            return data
        })
        .catch((error) => {
            const data = { status: false, response: error }
            return data
        })
}

export async function postDataChecklist(data){
    return axios.post(base_url+apiRoute.checklist, data)
        .then((response) => {
            const data = response.data
            return data
        })
        .catch((error) => {
            const data = { status: false, response: error }
            return data
        })
}

export async function postDataItemNameChecklist(id, data){
    return axios.post(base_url+apiRoute.checklist+`/${id}/item`, data)
        .then((response) => {
            const data = response.data
            return data
        })
        .catch((error) => {
            const data = { status: false, response: error }
            return data
        })
}

export async function deleteDataChecklist(id){
    return axios.delete(base_url+apiRoute.checklist+`/${id}`)
        .then((response) => {
            const data = response.data
            return data
        })
        .catch((error) => {
            const data = { status: false, response: error }
            return data
        })
}