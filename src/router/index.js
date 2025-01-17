import Vue from 'vue'
import Router from 'vue-router'
import HomeContent from '@/components/HomeContent'
import Dashboard from '@/components/Dashboard'
import Catalogos from '@/components/Catalogos'
import Programacion from '@/components/Programacion'
import Visualizacion from '@/components/Visualizacion'
import Mensajes from '@/components/Mensajes'
import Notificaciones  from '@/components/Notificaciones'
import Login  from '@/components/Login'
import Register  from '@/components/Register'
import Contacto  from '@/components/Contacto'
import Nosotros  from '@/components/Nosotros'
import Choferes  from '@/components/Choferes'
import Camiones  from '@/components/Camiones'
import Ubicacion  from '@/components/Ubicacion'
import Ruta from '@/components/Ruta'
import Paradas from '@/components/Paradas'
import firebase from 'firebase'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      name: 'Home',
      component: HomeContent
    },
    {
      path: '/',
      name: 'Home',
      component: HomeContent
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto
    },
    {
      path: '/nosotros',
      name: 'Nosotros',
      component: Nosotros
    },
    {
      path: '/dashboard',
      component: Dashboard,
      name: 'Dashboard',
      meta: {
        requiresAuth: true
      },     
      children: [
        {
          path: 'catalogos',
          component: Catalogos,
          name: 'Catalogos'
        },
        {
          path: 'programacion',
          component: Programacion,
          name: 'Programacion'
        },
        {
          path: 'visualizacion',
          component: Visualizacion,
          name: 'Visualizacion'
        },
        {
          path: 'mensajes',
          component: Mensajes,
          name: 'Mensajes'
        },
        {
          path: 'choferes',
          component: Choferes,
          name: 'Choferes'
        },
        {
          path: 'camiones',
          component: Camiones,
          name: 'Camiones'
        },
         {
          path: 'ubicacion',
          component: Ubicacion,
          name: 'Ubicacion'
        },
        {
          path: 'ruta',
          component: Ruta,
          name: 'Ruta'
        },
        {
          path: 'paradas',
          component: Paradas,
          name: 'Paradas'
        },
        {
          path: 'notificaciones',
          component: Notificaciones,
          name: 'Notificaciones'
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('dashboard/catalogos')
  else next()
})

export default router