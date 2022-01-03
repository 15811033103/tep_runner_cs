import axios from 'axios'

//创建一个axios的request对象
const request = axios.create({
    //baseURL:'/api/user',
    timeout: 5000
})

//设置请求头

//  request 拦截器，可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json'
    config.headers.common['Authorization'] = sessionStorage.getItem("token");
    //config.headers['token'] = sessionStorage.getItem("token");  // 设置请求头
    return config
}, error => {
    return Promise.reject(error)
});


// 设置返回数据
// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
    response => {
        let res = response.data;
        // 如果是返回的文件
        if (response.config.responseType === 'blob') {
            return res
        }
        // 兼容服务端返回的字符串数据
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        return res;
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)


export default request

