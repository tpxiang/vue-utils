/**
 * @description 获取当前日期 yyyy-MM-dd
 * @returns 
 */
export const getDayDate = () => {
  let myDate = new Date();
  let myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
  let myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
  let myToday = myDate.getDate(); //获取当前日(1-31)
  if (myMonth < 10) myMonth = '0' + myMonth
  if (myToday < 10) myToday = '0' + myToday
  return `${myYear}-${myMonth}-${myToday}`
}
/**
 * @description 获取当月第一天至当天的日期 [2021-06-01, 2021-06-25]
 * @returns 
 */
export const getMonthFirstDate = () => {
  let myDate = new Date();
  let date = new Date();
  date.setDate(1)
  let myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
  let myToday = myDate.getDate(); //获取当前日(1-31)
  let month = parseInt(date.getMonth() + 1)
  let day = date.getDate()
  if (month < 10) month = '0' + month
  if (day < 10) day = '0' + day
  if (myToday < 10) myToday = '0' + myToday
  return [`${myYear}-${month}-${day}`, `${myYear}-${month}-${myToday}`]
}

/**
 * @description 获取两个时间相差多少天
 * @param beginDate 开始时间
 * @param endDate 结束时间
 * @return {number} 天数
 */
export const getDateRegion = (beginDate, endDate) => {
  if (beginDate !== '' && endDate !== '') {
    return moment(beginDate).diff(moment(endDate), 'days')
  } else {
    return 0
  }
}
/**
* @description 定时任务  每天晚上23:59拉取数据
* @param targetHour
* @param min
*/
export const setRegular = (targetHour, min) => {
  let timeInterval, nowTime, nowSeconds, targetSeconds
  nowTime = new Date()
  // 计算当前时间的秒数
  nowSeconds = nowTime.getHours() * 3600 + nowTime.getMinutes() * 60 + nowTime.getSeconds()
  // 计算目标时间对应的秒数
  targetSeconds = targetHour * 3600 + min * 60
  //  判断是否已超过今日目标小时，若超过，时间间隔设置为距离明天目标小时的距离
  timeInterval = targetSeconds > nowSeconds ? targetSeconds - nowSeconds : targetSeconds + 24 * 3600 - nowSeconds
  return timeInterval * 1000
}
/***
 * @description 获取当月最后一天
 *  @return {*} MonthLastDay 返回本月最后一天的时间
 */
export const showMonthLastDay = () => {
  let Nowdate = new Date();
  let MonthNextFirstDay = new Date(Nowdate.getFullYear(), Nowdate.getMonth() + 1);
  let MonthLastDay = new Date(MonthNextFirstDay - 86400000);
  return MonthLastDay;
}

/**
 * @description 根据不同类型格式化日期
 * @param {*} date 具体日期变量
 * @param {string} dateType 需要返回类型
 */
export const getFormatDate = (date, dateType) => {
  let dateObj = new Date(date);
  let month = dateObj.getMonth() + 1;
  let strDate = dateObj.getDate();
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  let seconds = dateObj.getSeconds();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;

  }
  if (hours >= 0 && hours <= 9) {
    hours = "0" + hours
  }
  if (minutes >= 0 && minutes <= 9) {
    minutes = "0" + minutes
  }
  if (seconds >= 0 && seconds <= 9) {
    seconds = "0" + seconds
  }

  let dateText = dateObj.getFullYear() + '年' + (dateObj.getMonth() + 1) + '月' + dateObj.getDate() + '日';
  if (dateType == "yyyy-mm-dd") {
    dateText = dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + dateObj.getDate();
  }
  if (dateType == "yyyy.mm.dd") {
    dateText = dateObj.getFullYear() + '.' + (dateObj.getMonth() + 1) + '.' + dateObj.getDate();
  }
  if (dateType == "yyyy-mm-dd MM:mm:ss") {
    dateText = dateObj.getFullYear() + '-' + month + '-' + strDate + ' ' + hours + ":" + minutes + ":" + seconds;
  }
  if (dateType == "mm-dd MM:mm:ss") {
    dateText = month + '-' + strDate + ' ' + hours + ":" + minutes + ":" + seconds;
  }
  if (dateType == "yyyy年mm月dd日 MM:mm:ss") {
    dateText = dateObj.getFullYear() + '年' + month + '月' + strDate + '日' + ' ' + hours + ":" + minutes + ":" + seconds;
  }
  return dateText;
}

/**
 * @description   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime 
 * @return {String}
 */
export const formatPassTime = (startTime) => {
  var currentTime = Date.parse(new Date()),
    time = currentTime - startTime,
    day = parseInt(time / (1000 * 60 * 60 * 24)),
    hour = parseInt(time / (1000 * 60 * 60)),
    min = parseInt(time / (1000 * 60)),
    month = parseInt(day / 30),
    year = parseInt(month / 12);
  if (year) return year + "年前"
  if (month) return month + "个月前"
  if (day) return day + "天前"
  if (hour) return hour + "小时前"
  if (min) return min + "分钟前"
  else return '刚刚'
}

/**
 * 
 * @description   格式化现在距${endTime}的剩余时间
 * @param  {Date} endTime  
 * @return {String}
 */
export const formatRemainTime = (endTime) => {
  var startDate = new Date(); //开始时间
  var endDate = new Date(endTime); //结束时间
  var t = endDate.getTime() - startDate.getTime(); //时间差
  var d = 0,
    h = 0,
    m = 0,
    s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor(t / 1000 / 60 / 60 % 24);
    m = Math.floor(t / 1000 / 60 % 60);
    s = Math.floor(t / 1000 % 60);
  }
  return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
}