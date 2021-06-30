/**
 * @description 验证中文姓名
 * @param { string } value
 */
 export const isChineseName = value => /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value);

 /**
  * @description 验证英文姓名
 * @param { string } value
 */
export const isEnglishName = value => /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(value);

/**
 * @description 验证车牌号(新能源)
 * @param { string } value
 */
 export const isLicensePlateNumberNER = value => /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/g.test(value);

/**
 * @description 验证车牌号(非新能源)
 * @param { string } value
 */
 export const isLicensePlateNumberNNER = value => /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g.test(value);

/**
 * @description 验证车牌号(新能源+非新能源)
 * @param { string } value
 */
 export const isLicensePlateNumber = value => /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(value);

/**
 * @description 验证email(邮箱)
 * @param { string } value
 */
export const isEmail = value => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(value);

/**
 * @description 验证座机电话(国内),如: 0341-86091234
 * @param { string } value
 */
 export const isLandlineTelephone = value => /\d{3}-\d{8}|\d{4}-\d{7}/g.test(value);

 /**
  * @description 验证身份证号(1代,15位数字)
 * @param { string } value
 */
export const isIDCardOld = value => /^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/g.test(value);

/**
 * @description 验证身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
 * @param { string } value
 */
 export const isIDCardNew = value => /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/g.test(value);

 /**
  * @description 验证身份证号, 支持1/2代(15位/18位数字)
 * @param { string } value
 */
export const isIDCard = value => /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(value);

/**
 * @description 验证护照（包含香港、澳门）
 * @param { string } value
 */
 export const isPassport = value => /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(value);

/**
 * @description 验证中文/汉字
 * @param { string } value
 */
 export const isChineseCharacter = value => /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(value);

/**
 * @description 验证数字和字母组成
 * @param { string } value
 */
 export const isNumAndStr = value => /^[A-Za-z0-9]+$/g.test(value);

/**
 * @description 验证英文字母
 * @param { string } value
 */
 export const isEnglish = value => /^[a-zA-Z]+$/g.test(value);
