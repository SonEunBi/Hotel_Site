import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import reservation from '../components/reservation.vue'
import reservationComplete from '../components/reservationComplete.vue'
import reservationConfirm from '../components/reservationConfirm.vue'
import Location from './../views/Location.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/location',
    name: 'Location',
    component: Location
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
