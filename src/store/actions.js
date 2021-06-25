import apis from '@/api'
import { KEYS, statusCode } from '@/config'
import { setStorageItem } from '@/utils'
import * as MutationTypes from './mutationTypes'

const actions = {
  fetchUser: async ({ commit }, payload) => {
    try {
      const res = await apis.user.fetchUser(payload)
      commit(MutationTypes.SET_USER, res.data)
      return Promise.resolve(res)
    } catch (err) {
      return Promise.reject(err)
    }
  },
  /**
   * 路由时获取用户信息，需要在获取失败时不跳转到登陆页面，在Headers中添加自定义属性X-Strict-Route：loose标记
   */
  fetchUserBeforeRoute: async ({ commit }, payload) => {
    try {
      const res = await apis.user.fetchUser(payload, {
        headers: { 'X-Strict-Route': 'loose' }
      })
      console.log(res)
      if (res) {
        commit(MutationTypes.SET_USER, res.data)
      }
      return Promise.resolve(res)
    } catch (err) {
      return Promise.reject(err)
    }
  },
  login: async (context, payload) => {
    // 登陆
    try {
      const res = await apis.user.login(payload)
      const { code } = res
      if (code === statusCode.SUCCESS) {
        const {
          authToken,
          refreshToken,
          loginInfo: {
            userId
          }
        } = res.data
        // 设置localStorage
        setStorageItem(KEYS.JWTToken, authToken)
        setStorageItem(KEYS.RefreshToken, refreshToken)
        setStorageItem(KEYS.UserId, userId)
      }
      return Promise.resolve(res)
    } catch (err) {
      return Promise.reject(err)
    }
  }
}

export default actions
