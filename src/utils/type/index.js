/**
 * @description   判断是否为数组
 * @param  {*} value
 * @returns {Boolean}
 */
 export const isArray = (value) => {
  // es6判断
  if (Array.isArray) {
    return Array.isArray(value);
  }
  return Object.prototype.toString.call(value).slice(8, -1) === "Array";
}

/**
 * @description   判断是否为布尔类型
 * @param  {*} value
 * @returns {Boolean}
 */
 export const isBoolean = (value) => {
  return Object.prototype.toString.call(value).slice(8, -1) === "Boolean";
}

/**
 * @description   判断是否为日期类型
 * @param  {*} value
 * @returns {Boolean}
 */
 export const isDate = (value) => {
  return Object.prototype.toString.call(value).slice(8, -1) === "Date";
}

/**
 * @description   判断是否为函数
 * @param  {*} value
 * @returns {Boolean}
 */
 export const isFunction = (value) => {
  return Object.prototype.toString.call(value).slice(8, -1) === "Function";
}

/**
 * @description   判断是否为null
 * @param  {*} value
 * @returns {Boolean}
 */
 export const isNull = (value) => {
  // return value === null;
  return Object.prototype.toString.call(value).slice(8, -1) === "Null";
}

/**
 * @description   判断是否为数字类型
 * @param  {*} value
 * @returns {Boolean}
 */
 export const isNumber = (value) => {
  // '[object Number]'
  return Object.prototype.toString.call(value).slice(8, -1) === "Number";
}

/**
 * @description   判断是否为对象
 * @param  {*} value
 * @returns {Boolean}
 */
 export const isObj = (value) => {
  return Object.prototype.toString.call(value).slice(8, -1) === "Object";
}

/**
 * @description   判断是否为字符串类型
 * @param  {*} value
 * @returns {Boolean}
 */
 export const isString = (value) => {
  return Object.prototype.toString.call(value).slice(8, -1) === "String";
}

/**
 * @description   判断是否为undefined
 * @param  {*} value
 * @returns {Boolean}
 */
 export const isUndefined = (value) => {
  // return value === undefined;
  return Object.prototype.toString.call(value).slice(8, -1) === "Undefined";
}

/**
 * @description   判断是否为Promise对象
 * @param  {*} value
 * @returns {Boolean}
 */
 export const isPromise = (value) => {
  return Object.prototype.toString.call(value).slice(8, -1) === "Promise";
}

/**
 * @description   判断是否为Map
 * @param  {*} value
 * @returns {Boolean}
 */
 export const isMap = (value) => {
  return Object.prototype.toString.call(value).slice(8, -1) === "Map";
}

