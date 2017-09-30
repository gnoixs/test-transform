import Axios from 'axios'
import { getStorage } from './storage'
import router from '@/router/index'

// 全局配置
Axios.defaults.timeout = 10000
Axios.defaults.baseURL = "//api.alcp66.com"
//Axios.defaults.headers.common['Authorization'] = getStorage('username',sessionStorage);
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 对请求头进行拦截
Axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
});

// 对响应头进行拦截
Axios.interceptors.response.use((res) => {
  if(res.status == 200){
    switch (res.code){
      case '4001':        // oid失效
        router.replace({
          path: '/login',
          query: {redirect: router.currentRoute.fullPath}
        });
        break;
      default:
        return res;
    }
  }else{
    console.log('非200状态码')
  }

}, (error) => {
  return Promise.reject(error)
});
export default Axios
