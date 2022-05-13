import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { base_url } from '@/config/base_url'
import ApiRoute from '@/services/api.route'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {}
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        }
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({ url: base_url+ApiRoute.login, data: user, method: 'POST' })
                    .then(resp => {
                        const data = resp.data.data
                        console.log(data, 'ini respon login')
                        const token = data.token
                        const user = resp.data.data
                        localStorage.setItem('token', token)
                        localStorage.setItem('userData', JSON.stringify(user))
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        }
    },
    modules: {
    }
})
