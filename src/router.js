import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Product from './views/Product.vue'
import FullArticle from './views/FullArticle.vue'
import NewsPage from './views/NewsPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: Product
    },
    {
      path: '/news',
      name: 'allNews',
      component: NewsPage
    },
    {
      path: '/news/:id',
      name: 'news',
      component: FullArticle
    }
  ]
})
