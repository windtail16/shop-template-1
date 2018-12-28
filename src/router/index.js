import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

/* Layout */
import Top from '@/components/layout/top/'
import Bottom from '@/components/layout/bottom/'

/* Pages */
import Main from '@/components/main/'
import Shop from '@/components/shop/'
import ShopDetail from '@/components/shop/detail'
import News from '@/components/news/'
import NewsDetail from '@/components/news/detail'
import About from '@/components/about/'
import Signin from '@/components/signin/'
import Signup from '@/components/signup/'
import Cart from '@/components/cart/'

/* Router View Set */
function COMMON_LAYOUT (Content) {
  return {top: Top, Content, bottom: Bottom}
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      components: COMMON_LAYOUT(Main)
    },
    {
      path: '/shop/',
      name: 'Shop',
      components: COMMON_LAYOUT(Shop)
    },
    {
      path: '/shop/:id',
      name: 'ShopDetail',
      components: COMMON_LAYOUT(ShopDetail)
    },
    {
      path: '/news/',
      name: 'News',
      components: COMMON_LAYOUT(News)
    },
    {
      path: '/news/:id',
      name: 'NewsDetail',
      components: COMMON_LAYOUT(NewsDetail)
    },
    {
      path: '/about/',
      name: 'About',
      components: COMMON_LAYOUT(About)
    },
    {
      path: '/signin/',
      name: 'Signin',
      components: COMMON_LAYOUT(Signin)
    },
    {
      path: '/signup/',
      name: 'Signup',
      components: COMMON_LAYOUT(Signup)
    },
    {
      path: '/cart/',
      name: 'Cart',
      components: COMMON_LAYOUT(Cart)
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
