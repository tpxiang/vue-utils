// Ajax统一状态码
export const statusCode = {
  SUCCESS: 1000, // 成功
  NOT_LOGIN: 1001, // 未登录
  TOKEN_EXPIRED: 1002, // TOKEN过期
  INVALID_PARAM: 1003, // 无效参数
  BAD_AUTHORIZED: 1004, // 未授权
  EMPTY_RESULT: 1005, // 结果为空
  DATABASE_EXCEPTION: 1006, // 数据库异常
  UNKNOW_USERNAME: 2001, // 未知用户
  INVALID_VERIFICATION_CODE: 2001, // 无效验证码
  FILE_SIZE_EXCEED_MAX: 3001, // 文件尺寸超过最大值
  EMPTY_FILE: 3002, // 文件为空
  FILE_HANDLER_EXCEPTION: 3003, // 文件处理异常
  EMPTY_FILENAME: 3004, // 文件名为空
  INVALID_FILE_TYPE: 3005 // 无效文件类型
}

export const projectTitle = '前端项目模板'

export const baseURL = '/'
// KEYS
export const KEYS = {
  JWTToken: 'libraJWTToken',
  RefreshToken: 'libraRefreshJWTToken',
  UserId: 'libraUserId'
}
