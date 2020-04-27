import axios from 'axios'

const request = axios.create({
  baseURL: 'https://miao.inthink.com.cn/api'
})

export default request
