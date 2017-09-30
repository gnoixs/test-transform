import axios from 'axios'

//import params from './params'

//console.log(params.oid)

const demo_login = '/user/signdemo';     // 试玩接口

export default function(){
  return axios.post(demo_login).then((res) => {
    return Promise.resolve(res);
  })
}
