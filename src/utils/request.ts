/**
 * @description [ axios 请求封装]
 */
// import store from '@/store'
import axios from 'axios'
import type {
    AxiosInstance,
    InternalAxiosRequestConfig,
    AxiosResponse,
    AxiosRequestConfig
} from 'axios'

import router from '@/router'
// 根据环境不同引入不同api地址
// import config from '@/config'
import { closeToast, showLoadingToast, showToast } from 'vant'
const baseURL = import.meta.env.VITE_BASE_URL
const instance: AxiosInstance = axios.create({
    baseURL,
    timeout: 5000,
    withCredentials: false // send cookies when cross-domain requests
    // headers: {
    // 	// clear cors
    // 	'Cache-Control': 'no-cache',
    // 	Pragma: 'no-cache'
    // }
})

// Request interceptors
instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 加载动画
        showLoadingToast({
            message: '加载中...',
            forbidClick: true
        })
        // 在此处添加请求头等，如添加 token
        // if (store.state.token) {
        // config.headers['Authorization'] = `Bearer ${store.state.token}`
        // }
        return config
    },
    (error: any) => {
        Promise.reject(error)
    }
)

// Response interceptors
instance.interceptors.response.use(
    async (response: AxiosResponse) => {
        // await new Promise(resovle => setTimeout(resovle, 3000))
        closeToast()
        const res = response.data
        if (res.code !== 0) {
            // token 过期
            if (res.code === 401) {
                // 警告提示窗
                return
            }
            if (res.code == 403) {
                showToast(res.msg)
                return
            }
            // 若后台返回错误值，此处返回对应错误对象，下面 error 就会接收
            return Promise.reject(new Error(res.msg || 'Error'))
        } else {
            // 注意返回值
            return response.data
        }
    },
    (error: any) => {
        closeToast()
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '请求错误(400)'
                    break
                case 401:
                    error.message = '未授权,请登录(401)'
                    break
                case 403:
                    error.message = '拒绝访问(403)'
                    break
                case 404:
                    error.message = `请求地址出错: ${error.response.config.url}`
                    break
                case 405:
                    error.message = '请求方法未允许(405)'
                    break
                case 408:
                    error.message = '请求超时(408)'
                    break
                case 500:
                    error.message = '服务器内部错误(500)'
                    break
                case 501:
                    error.message = '服务未实现(501)'
                    break
                case 502:
                    error.message = '网络错误(502)'
                    break
                case 503:
                    error.message = '服务不可用(503)'
                    break
                case 504:
                    error.message = '网络超时(504)'
                    break
                case 505:
                    error.message = 'HTTP版本不受支持(505)'
                    break
                default:
                    error.message = `连接错误: ${error.message}`
            }
        } else {
            if (error.message == 'Network Error') {
                error.message == '网络异常，请检查后重试！'
            }
            error.message = '连接到服务器失败，请联系管理员'
        }
        showToast(error.message)
        // store.auth.clearAuth()
        // store.dispatch('clearAuth')
        return Promise.reject(error)
    }
)

const request = <T>(config: AxiosRequestConfig): Promise<T> => {
    const conf = config
    return new Promise((resolve) => {
        instance.request<any, AxiosResponse<T>>(conf).then((res: AxiosResponse<T>) => {
            resolve(res.data as T)
        })
    })
}
export default request
