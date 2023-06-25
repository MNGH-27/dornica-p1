import axios from "axios";

//there is no need for baseURL and useCredential in this project
//axiosInstance is useFul in useFetch()(custome hook)
const axiosInstance = axios.create({
  //   baseURL: "",
  //   withCredentials: true,
});

export default axiosInstance;
