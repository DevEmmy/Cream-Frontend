//import { Toast } from "react-toastify/dist/components";
import { success } from "./toaster";
import toast from "react-hot-toast";

const { default: axios } = require("axios");

const axiosRequest = axios.create({
  baseURL: "https://cream-v2.onrender.com/api/v2",
});

export default axiosRequest;

export const createAxiosInstance = (router) => {
  // Create an Axios instance with default configuration
  const axiosInstance = axios.create({
    baseURL: "https://cream-v2.onrender.com/api/v2",
    // You can add other default configurations here
  });

  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      // If the response status is between 200 and 299, return the response
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        // If the response status is 403, handle it here
        if (response.status === 403) {
          // Perform the actions you want for 403 status
          toast.dismiss();
          success("You are not logged in");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          // Redirect to the login page or another route
          router.push("/login");
        }
        // For other status codes, throw an error to be caught in the catch block
        throw new Error(response.statusText || "An error occurred");
      }
    },
    (error) => {
      // If there's an error in the response, handle it here
      if (error.response && error.response.status === 403) {
        // Perform the actions you want for 403 status
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        // Redirect to the login page or another route
        router.push("/login");
      }
      // For other errors, throw an error to be caught in the catch block
      throw error;
    }
  );

  return axiosInstance;
};

// Now use createAxiosInstance to get an instance with router prop
//const axiosInstanceWithRouter = createAxiosInstance(router);
