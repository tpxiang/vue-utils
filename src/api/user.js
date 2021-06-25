import axios from '@/axios'
// 获取用户信息
export const fetchUser = (userId, config) => axios.get(`/api/user/userId/${userId}`, config)
// 登陆
export const login = data => axios.post('/auth/login', data)
// 刷新token
export const refreshToken = data => axios.post('/auth/refreshToken', data)
// 退出登录
export const loginOut = () => axios.post('/logout')
