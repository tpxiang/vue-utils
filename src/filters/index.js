import Vue from 'vue'
import moment from 'moment'

/**
 * 日期时间格式化指令处理函数
 * @param { date } value 需要转化的日期，默认为当前时间
 * @param { string } formatter 格式化字符串，默认为YYYY-MM-DD，可接受moment插件可接受的字符串
 * @returns { string } 格式化之后的字符串
 */
const momentHandler = (value = Date.now(), formatter = 'YYYY-MM-DD') => moment(value).format(formatter)
Vue.filter('moment', momentHandler)
