import axiosInstance from "../helper/axiosInstance";

import { toast } from "react-toastify";

const AxiosInstance = (route = null) => {
  axiosInstance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return error;
    }
  );
  axiosInstance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      if (!error.response) {
        toast.warn("Network Error", {
          toastId: "id-network-error",
        });
      } else if (error.response.status === 500) {
        toast.warn("500 Internet server Error", {
          toastId: "id-code-500",
        });
      }

      //check status code with backend to handler it
      else if (error.response.status === 400) {
        toast.warn(error.response.message, {
          toastId: "id-code-400",
        });
        return error.response;
      }
      //check status code with backend if user has token
      else if (error.response.status === 401) {
        //user doesn't have token,
        //redirect to signin/signup page
        route("/auth");
        return error.response;
      }
      //check status code with backend if user is Forbidden
      else if (error.response.status === 403) {
        //user doesn't premission to come to this page

        //clear token from cookie
        document.cookie =
          "token=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        //redirect to auth page
        route("/auth");

        return error.response;
      }
      return error.response;
    }
  );
  return axiosInstance;
};

export default AxiosInstance;
