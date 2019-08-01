import Vue from 'vue'
import Router from 'vue-router'
import Gradebooks from './components/Gradebooks'
import SingleGradebook from './components/SingleGradebook'
import Login from './components/Login'
import Register from './components/Register'
import AddStudents from './components/AddStudents'
import Professors from './components/Professors'
import SingleProfessor from './components/SingleProfessor'
import AddGradebook from './components/AddGradebook'


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
      path: '/teachers/',
      name: 'professors',
      component: Professors
    },
    {
      path: '/teachers/:id',
      name: 'single-professor',
      component: SingleProfessor
    },
    {
      path: '/gradebooks/create',
      name : 'add-gradebook',
      component : AddGradebook
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
    },
    {
      path: '/gradebooks/:id/students/create',
      name : 'add-students',
      component: AddStudents
    }
  ]
})
