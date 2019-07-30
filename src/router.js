import Vue from 'vue'
import Router from 'vue-router'
import Gradebooks from './components/Gradebooks'
import SingleGradebook from './components/SingleGradebook'
import Login from './components/Login'
import Register from './components/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
    path : '/',
    name : 'gradebooks',
    component : Gradebooks
    },
    {
      path : '/gradebooks/:id',
      name : 'single-gradebook',
      component : SingleGradebook
    },
    {
      path: '/login',
      name : 'login',
      component : Login
    },
    {
      path: '/register',
      name :'register',
      component : Register
    }
  ]
})
