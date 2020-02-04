import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index.vue'
import Cinema from '../views/cinema/cinema.vue'
import Eticket from '../views/eticket/eticket.vue'
import Center from '../views/center/center.vue'
import SelectCity from '../views/index/selectCity.vue'
import Detail from '@/views/detail/detail.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'index',
  //   component: Index
  // },
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/selectCity',
    component: SelectCity
  },
  {
    path: '/cinema',
    name: 'cinema',
    component: Cinema
  },
  {
    path: '/eticket',
    name: 'eticket',
    component: Eticket
  },
  {
    path: '/center',
    name: 'center',
    component: Center
  },
  {
    path: '/detail/:myid',
    name: 'detail',
    component: Detail,
    props: true
  },
  {
    path: '*',
    redirect:'/index'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
