//axios基础封装
import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000,
  });


//axios请求拦截器
  instance.interceptors.request.use(config=>{
    return config;
  },e=>Promise.reject(e))
//axios响应拦截器
instance.interceptors.response.use(res=>res.data,e=>{
     return Promise.reject(e)
})

  export default instance