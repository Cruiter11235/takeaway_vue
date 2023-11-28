import axios from "axios";
class API {
  static axios = axios.create({
    baseURL: "http://123.207.32.32:8000/",
    timeout: 12000,
  });
  constructor() {}
  static get(url, param) {
    // 返回promise对象
    return this.axios({
      method: "get",
      url,
    });
  }
}
export default API;
