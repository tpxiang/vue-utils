import Mock from 'mockjs'

Mock.mock(/\/auth\/login/, 'post', () => ({
  code: 1000,
  message: '',
  data: Mock.mock({
    'userName|1': 'admin',
    'sex|1': ['男', '女']
  })
}))

Mock.mock('/api/user/userId/123456', 'get', () => ({
  code: 1000,
  message: '',
  data: Mock.mock({
    'userName|1': '渣渣辉',
    'sex|1': ['男', '女'],
    'token|1': '123456789123'
  })
}))
