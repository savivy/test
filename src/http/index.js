import axios from 'axios'
let instance =axios.create({
  baseURL:'/api',
  timeout:6000
})

instance.interceptors.request.use((config)=>{
  let token=localStorage.getItem('token')
  if(token){
    config.headers.token=token
  }
  return config
},(err)=>{
  Promise.reject(err)
})

function  get(url,params) {
      return instance.get(url,{params})
}
function post(url,data) {
    return instance.post(url,data)


}

export  default {
  get,
  post
}