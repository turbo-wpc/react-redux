import axios from 'axios'
import jsonp from 'jsonp'
import queryString from 'query-string'

axios.defaults.withCredentials = true

export class Request {
  constructor(baseURL='', params) {
    this.baseURL = baseURL
    this.defaultParams = { ...params }
    this.instance = axios.create({
      baseURL: this.baseURL,
      timeout: 10000,
      headers: {}
    })
  }

  /**
   * 增加请求拦截器
   * @param option 拦截器回调方法
   */
  addReqInterceptor(option) {
    this.instance.interceptors.request.use(option.success, option.error)
  }

  /**
   * 增加响应拦截器
   * @param option 响应回调方法
   */
  addResInterceptor(option) {
    this.instance.interceptors.response.use(option.success, option.error)
  }

  formatUrl(url, params) {
    return url + '?' + queryString.stringify({ ...this.defaultParams, ...params })
  }

  /**
   * GET请求
   * @param url 请求地址
   * @param params 查询字符串
   */
  get(url, params) {
    return this.instance.get(this.formatUrl(url, params))
  }

  /**
   * POST请求
   * @param url  请求地址
   * @param params 查询字符串
   * @param data BODY数据
   */
  post(url, params, data) {
    return this.instance.post(this.formatUrl(url, params), data)
  }

  /**
   * JSONP请求
   * @param url 请求地址
   * @param params 查询字符串
   * @param options jsonp选项
   */
  jsonp(url, params, options) {
    options = Object.assign({
      timeout: 10000,
    }, options)
    return new Promise((resolve, reject) => {
      jsonp(this.formatUrl(this.baseURL + url, params), options, (err, data) => {
        if (!err) {
          resolve(data)
        } else {
          reject(err)
        }
      })
    })
  }
}
