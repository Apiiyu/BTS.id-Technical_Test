import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'auth-login',
        redirect: '/auth/login',
    },
    {
        path: '/auth',
        name: 'auth',
        component: {
            render (c) { return c('router-view') }
        },
        children: [
            {
                path: 'login',
                name: 'auth-login',
                component: () => import('@/views/pages/authentication/Login.vue'),
            },
            {
                path: 'register',
                name: 'auth-register',
                component: () => import('@/views/pages/authentication/Register.vue'),
            }
        ]
    },
    {
        path: '/to-do',
        name: 'todo-dashboard',
        component: {
            render (c) { return c('router-view') }
        },
        children: [
            {
                path: 'dashboard',
                name: 'todo-dashboard',
                component: () => import('@/views/pages/todo/Dashboard.vue'),
            },
            {
                path: 'create',
                name: 'todo-create',
                component: () => import('@/views/pages/todo/Create.vue'),
            },
            {
                path: 'detail/:id/item',
                name: 'todo-detail-item',
                component: () => import('@/views/pages/todo/item/Create.vue'),
            }
        ]
    }
]

const router = new VueRouter({
  routes
})

export default router
