import axios from 'axios'
import util from 'libs/util'
import { BASE_URL } from './api'
import qs from 'qs'
import h5toNative from 'libs/h5toNative'
import Hs from "../components/message";
// axios 基础配置
const _axios = axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * 20,
  responseType: 'json',
  withCredentials: true
})

// POST请求序列化（添加拦截器）
_axios.interceptors.request.use(
  config => {
    let token = util.getParam('token'); // || '2454411e24f9c96bae22a571788aa086'
    let tokentype = util.getParam('tokentype');
    if (!token) {
      token = localStorage.getItem('token')||localStorage.getItem('userToken')
    } else {
      localStorage.setItem('token', token)
    }
    if (!tokentype) {
      tokentype = localStorage.getItem('tokentype')
    } else {
      localStorage.setItem('tokentype', tokentype)
    }
    config.headers.token = token
    config.headers.tokentype = tokentype || 'app'
    // 是否需要添加token
    return config
  },
  error => {
    return Promise.reject(error.msg)
  }
)

// 返回状态判断（添加响应拦截器）
_axios.interceptors.response.use(
  res => {
    // 判断是否在响应头中含有该字段（图形验证码用到）
    if (res.headers.captcha) {
      return res
    }
    if(!res.data.code&&res.data.msg.indexOf('服务器繁忙')>=0){
      Hs.confirm({
        title: '网络繁忙',
        message: '请刷新重试',
        callback: () => {
          window.location.reload();
        }
      });
    }
    return res.data
  },
  error => {
    console.log('axios error: ',error)
    let errorStatus = error.response.status;
    let lob = sessionStorage.getItem('lob')||'';
    if(errorStatus === 401&&lob!=='web'&&lob!=='weChat'){
      // 未登录情况调用APP方法登录
      console.log('登录过期....')
      h5toNative.callAppLogin((result) => {
        console.log('app登录成功回调: ', result)
      })
    }else if(errorStatus === 401){
      return Promise.reject(error)
    }else{
      alert('接口错误，刷新重试')
      return Promise.reject(error)
    }
  }
)

const Axios = axios.create({
  baseURL:'',
  timeout: 1000 * 15,
  responseType: 'json',
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    //'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
Axios.interceptors.request.use(
  config => {
    // 请求前判断请求方式
    if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
      if (config.headers['Content-Type'] == 'application/x-www-form-urlencoded;charset=UTF-8') {
        config.data = qs.stringify(config.data)
      } else {
        config.data = config.data
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error)
  }
)
Axios.interceptors.response.use(
  res => {
    // 判断是否在响应头中含有该字段（图形验证码用到）
    if (res.headers.captcha) {
      return res
    } else {
      return res.data
    }

  },
  error => {
    return Promise.reject(error)
  }
)
const req = {
  /**
   * [get description]
   * @param  {[type]} url     [description]
   * @param  {[type]} params  [description]
   * @param  {Object} options [description]
   * @return {[type]}         [description]
   */
  get(url, params, options = {}) {
    return _axios.get(url, {
      params,
      ...options,
    })
  },
  /**
   * [post description]
   * @param  {[type]} url     [description]
   * @param  {[type]} params  [description]
   * @param  {Object} options [description]
   * @return {[type]}         [description]
   */
  post(url, params, options = {}) {
    return _axios.post(url, params, options)
  },
  post2(url, params, options = {}) {
    return Axios.post(url, params, options)
  }
}
export {
  req,
  _axios,
  Axios
}
