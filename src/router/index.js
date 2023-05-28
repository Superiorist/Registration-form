import { createRouter, createWebHashHistory } from 'vue-router'
import form from '../views/Form.vue'

const routes = [
  {
    path: '/',
    name: 'Form',
    component: form
  },
  {
    path: '/preview',
    name: 'Preview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Preview.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
