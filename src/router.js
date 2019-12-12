import Vue from 'vue'
import Router from 'vue-router'
import CurrencyConverter from "./views/CurrencyConverter.vue";
import FreelanceCalculator from "./views/FreelanceCalculator.vue"
import BordeauxDistrict  from "./components/BordeauxDistrict";
import Home from "./views/Home.vue";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/currency-converter',
      name: 'currency-converter',
      component: CurrencyConverter
    },
    {
      path: '/freelance-calculator',
      name: 'freelance-calculator',
      component: FreelanceCalculator
    },
    {
      path: '/bordeaux-district',
      name: 'bordeaux-district',
      component: BordeauxDistrict
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
