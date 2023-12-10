import axios from "axios";
var API = axios.create({
  /* 基础路径 */
  baseURL: "http://localhost:8080/",
  /* 设置超时时间 */
  headers: { "Content-Type": "application/json;charset=UTF-8" },
});
export default API;
