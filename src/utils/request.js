import axios from "axios";

axios.defaults.baseURL = 'https://db.loli.monster'  //正式

axios.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    console.info(`异常请求：${JSON.stringify(error.message)}`)
  }
);

const request = (url,data,method='get',headers={}) => {
    return new Promise((resolve, reject) => {
      axios({
          method,
          url,
          [method!='get'?'data':'params']:data,
          headers
      })
      .then(e => resolve(e))
      .catch(err => reject(err));
    })
}
export default request