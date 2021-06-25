import Vue from 'vue'
import Router from 'vue-router'
import router from '@/router'
import store from '@/store'
// import { Loading } from 'element-ui'
import { getStorageItem } from '@/utils'
import { projectTitle } from '@/config'

const Login = () => import('@/views/Login.vue')
const Index = () => import('@/views/Index.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

// 路由钩子,导航之前
router.beforeEach(async (to, from, next) => {
  // Loading.service() // 开启页面loging状态
  const userId = getStorageItem('userId')
  // 防止刷新页面之后用户信息丢失
  if (userId && !store.state.user) {
    await store.dispatch('fetchUserBeforeRoute', userId)
  }
  // 判断目的路由是否需要登陆授权
  if (to.matched.some(record => record.meta.requireAuth) && !userId) {
    next({
      name: 'login',
      query: {
        redirect: to.fullPath // 登陆之后需要重定向的路由路径
      }
    })
  } else {
    next()
  }
})

// 进入路由后设置文档标题
router.afterEach((to) => {
  document.title = to.matched.reduce((acc, cur) => cur.meta.title || acc, projectTitle)
})
