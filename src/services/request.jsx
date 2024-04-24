import toast from "react-hot-toast";
import { error, loading, success } from "./toaster";
import { useRouter } from "next/router";
import axios from "axios";

const { default: axiosRequest, createAxiosInstance } = require("./axiosConfig");

export const sendQuery = async (text) => {
  const result = await axios.post(
    "https://binaryy-cream-prototype-tobi.hf.space/run/predict",
    {
      data: [text],
    }
  );

  console.log(result.data.data[0]);
  return result.data.data[0];
};

export const login = async (email, password, router) => {
  toast.dismiss();
  const toastId = loading("Logging in...");
  const loginData = { email: email, password: password };
  //console.log("stringified details:", loginData);
  await axiosRequest
    .post("/auth/login", loginData)
    .then((response) => {
      toast.dismiss(toastId);
      let token = response.data.data.accessToken;
      const user = response.data.data.user;
      //console.log("token", token);
      if (token) {
        success(response.data.message);
        //console.log("response:", response.data);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/");
      } else if (response.status === 404) {
        //console.log("user does not exist");
        error("User does not exist");
      } else {
        error("An error occured, try again");
        //console.log("response", response);
      }
      //console.log(response.data.error);
    })
    .catch((err) => {
      toast.dismiss(toastId);
      //console.log(err);
      error(err.response?.data.error) ?? "An error occured";
    });
};

export const register = async (details, router) => {
  const toastId = loading("Signing up...");

  await axiosRequest
    .post("/auth/register", details)
    .then((response) => {
      toast.dismiss(toastId);
      let token = response.data.accessToken;
      if (token) {
        success(
          response.message +
            " \ncheck your email and click the link to verify your account"
        );
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        router.push("/");
      } else {
        error(response.data.message);
        // console.log("error with code: ", response.data.message);
      }
      //console.log(response);
    })
    .catch((err) => {
      toast.dismiss(toastId);
      toast.dismiss(toastId);
      //console.log(err);
      error(err.response.data.error);
    });
};

export const verifyEmail = async (token, router) => {
  const toastId = loading("Please wait a moment while verifying account...");

  await axiosRequest
    .post("/auth/verify-account", token)
    .then((response) => {
      //toast.dismiss(toastId);

      if (response) {
        toast.dismiss();
        success(response.message);
        console.log(response);

        router.push("/login");
      } else {
        toast.dismiss();
        error(response.data.message);
        // console.log("error with code: ", response.data.message);
      }
      //console.log(response);
    })
    .catch((err) => {
      toast.dismiss(toastId);
      toast.dismiss(toastId);
      console.log(err);
      error(err.response.data.error);
    });
};

export const validateLoggedIn = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  }
  return false;
};

export const getAllListings = async (cat) => {
  let data = [];
  await axios
    .get(`https://king-david-elites.onrender.com/listings/all`)
    .then((response) => {
      data = response.data;
      console.log(data);
    })
    .catch((err) => {
      if (err.response) {
        error(err.response.data.message);
      } else {
        error("An Error Occured");
      }

      //console.log(err);
    });
  return data.listings;
};

export const getAListing = async (id, router) => {
  const axiosInstanceWithRouter = createAxiosInstance(router);

  let data;
  await axiosInstanceWithRouter
    .get(`/listing/${id}`)
    .then((response) => {
      data = response.data;
    })
    .catch((err) => {
      if (err.response) {
        error(err.response.data.message);
      } else {
        error("An Error Occured");
      }

      //console.log(err);
    });
  return data;
};

export const getUserListing = async (id) => {
  const axiosInstanceWithRouter = createAxiosInstance(router);

  let data;
  await axiosInstanceWithRouter
    .get(`/listing/user/${id}`)
    .then((response) => {
      data = response.data;
    })
    .catch((err) => {
      if (err.response) {
        error(err.response.data.message);
      } else {
        error("An Error Occured");
      }

      //console.log(err);
    });
  return data;
};

export const getDetails = () => {
  let data = JSON.parse(localStorage.getItem("user"));
  return data;
};

export const getListingsPerPage = async (page, category, id = "") => {
  let response;
  await axiosRequest
    .get(`/listing/?page=${page}&category=${category}&subcategory=${id}`)
    .then((resp) => {
      //console.log('resp: ', resp)
      response = {
        list: resp.data.data.listings,
        number: resp.data.data.count,
      };
    })
    .catch((err) => console.error(err));
  return response;
};
export const postPropertyRequest = async (name, email, description, router) => {
  const details = { name: name, email: email, request: description };
  const toastId = loading("Submitting...");
  const axiosInstanceWithRouter = createAxiosInstance(router);

  try {
    const response = await axiosInstanceWithRouter.post(
      "/api/v2/property-request",
      details
    );

    toast.dismiss(toastId);

    if (response) {
      success(response.data.message);
    } else {
      error(response.data.message);
    }
  } catch (err) {
    toast.dismiss(toastId);

    if (err.response) {
      error(err.response.data.error);
    } else {
      error("An Error Occurred");
    }
  }
};

export const getAllPropertyRequests = async () => {
  let response;
  await axios
    .get(`https://cream-v2.onrender.com/api/v2/property-request`)
    .then((resp) => {
      response = { list: resp.data };
    })
    .catch((err) => console.error(err));
  return response;
};

// export const getUserById = async (id) => {
//   let response;
//   await axios
//     .get(`https://cream-v2.onrender.com/api/v2/user/${id}`)
//     .then((resp) => {
//       response = { list: resp.data };
//     .catch((err) => console.error(err));
//   return response;
// };

export const getUserPropertyRequests = async (id) => {
  let response;
  await axios
    .get(`https://cream-v2.onrender.com/api/v2/property-request/{id}`)
    .then((resp) => {
      response = { list: resp.data };
    })
    .catch((err) => console.error(err));
  return response;
};

export const postArticle = async (formData, router) => {
  const axiosInstanceWithRouter = createAxiosInstance(router);
  const token = localStorage.getItem("token");
  //console.log("token:", token);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  toast.dismiss();
  const toastId = loading("posting article...");

  await axiosInstanceWithRouter
    .post("/article", formData, { headers: headers })
    .then((response) => {
      console.log(response);
      if (response.status == 200 || response.status == 201) {
        success(response.data.message);
        return true;
      } else {
        toast.dismiss();
        error("An error occured, please try again");
        console.log(response);
      }
      console.log(response);
      return false;
    })
    .catch((err) => {
      toast.dismiss();
      if (err.response && err.response.status === 403) {
        // Handle 403 status code
        error("You have to be logged in to post an article");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/login");
      } else {
        // Handle other errors
        console.log(err.response);
        error("An error occurred, please try again");
      }
    });
};

export const getArticles = async () => {
  toast.dismiss();
  // const toastId = toast.loading("Fetching articles...");
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  //console.log("token:", token);
  //console.log("user:", user);

  try {
    const response = await axiosRequest.get("/article");

    toast.dismiss();

    if (response.data) {
      // Handle success
      //toast.success("Articles fetched successfully");
      return response.data; // You can return the data if needed
    } else {
      // Handle non-success status
      toast.error("Failed to fetch articles");
    }
  } catch (err) {
    toast.dismiss();
    // Handle request error
    error(
      err.response?.data.error ?? "An error occurred while fetching articles"
    );
    //console.error(err);
  }
};

// Function for GET by ID request
export const getArticleById = async (articleId) => {
  toast.dismiss();
  //const toastId = toast.loading("Fetching article...");

  try {
    const response = await axiosRequest.get(`/article/${articleId}`);

    toast.dismiss();

    if (response.status >= 200 && response.status < 300) {
      // Handle success
      //toast.success("Article fetched successfully");
      return response.data; // You can return the data if needed
    } else {
      // Handle non-success status
      toast.error("Failed to fetch article");
    }
  } catch (error) {
    toast.dismiss();
    // Handle request error
    toast.error("An error occurred while fetching article");
    //console.error(error);
  }
};

export const suscribeToNewsLetter = async (email) => {
  const details = { email: email };
  const toastId = loading("Subscribing...");
  await axiosRequest
    .post("/newsletter/subscription", details)
    .then((response) => {
      console.log(response);
      toast.dismiss(toastId);
      if (response) {
        toast.dismiss();
        success(response.data.message);
      } else {
        error(response.data.message);
      }
      //console.log(response);
    })
    .catch((err) => {
      console.log(err);
      //console.log(response);
      toast.dismiss();
      if (err.response) {
        error(err.response.data.error);
      } else {
        error("An Error Occured");
      }

      //console.log(err);
    });
};

export const getSubCategories = async ({ router, subcategory }) => {
  console.log("id", subcategory);
  const axiosInstanceWithRouter = createAxiosInstance(router);

  try {
    const response = await axiosInstanceWithRouter.get(
      `/subcategory/category/${subcategory}`
    );

    //toast.dismiss(toastId);

    if (response) {
      console.log(response.data.message);
      return response.data;
    } else {
      console.log(response.data.message);
    }
  } catch (err) {
    //toast.dismiss(toastId);
    console.log(err.response);
    if (err.response) {
      console.log(err.response.data.error);
    } else {
      console.log("An Error Occurred");
    }
  }
};

export const postNewSubCategory = async ({ data, router }) => {
  //const details = { name: name, email: email, request: description };
  const toastId = loading("Submitting...");
  console.log("data gotten", data);
  const axiosInstanceWithRouter = createAxiosInstance(router);

  try {
    const response = await axiosInstanceWithRouter.post("/subcategory", data);

    toast.dismiss(toastId);

    if (response) {
      success(response.data.message);
    } else {
      error(response.data.message);
    }
  } catch (err) {
    toast.dismiss(toastId);
    console.log(err.response);
    if (err.response) {
      error(err.response.data.error);
    } else {
      error("An Error Occurred");
    }
  }
};

export const updateSubCategory = async ({ subcategoryId, data, router }) => {
  const toastId = loading("Updating...");
  console.log("Updating subcategory with ID:", subcategoryId);
  console.log("Updated data:", data);

  const axiosInstanceWithRouter = createAxiosInstance(router);

  try {
    const response = await axiosInstanceWithRouter.put(
      `/subcategory/${subcategoryId}`,
      data
    );

    toast.dismiss(toastId);

    if (response) {
      success(response.data.message);
    } else {
      error(response.data.message);
    }
  } catch (err) {
    toast.dismiss(toastId);
    console.log(err.response);
    if (err.response) {
      error(err.response.data.error);
    } else {
      error("An Error Occurred");
    }
  }
};
