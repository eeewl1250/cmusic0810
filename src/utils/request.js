import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'https://cmusic.ao3tag.xyz'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default function request (url, type = 'GET', data = {}) {
  return new Promise ((resolve, reject) => {
    let options = {
      url,
      method: type.toLowerCase(),
      data: type.toUpperCase() === 'GET' ? {} : data,
      params: type.toUpperCase() === 'GET' ? data : {},
      paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'brackets' })
      },
      transformRequest: [function (data) {
        return qs.stringify(data)
      }],
      validateStatus: function (status) {
        return (status >= 200 && status < 300) || (status === 304) || (status === 400) || (status === 502)
      }
    }
    axios(options)
        .then(res => {
          console.log('>> utils.js >> request.js >> Status: ', res.status )
          console.log(res.data)

          // 根据接口文档，缩小status字段
          res.status === 200 && resolve(res)
          reject(res)
        })
        .catch(err => {
          console.log('>> utils.js >> request.js >> ERROR!' )
          console.log(err)
          reject({
            msg: 'From request.js: Network error.'
          })
        })
  })
}