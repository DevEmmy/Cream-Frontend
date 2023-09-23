const { default: axios } = require("axios");

const axiosRequest = axios.create({
    baseURL: "https://king-david-elites.onrender.com",
})

export default axiosRequest