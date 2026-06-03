import axios from "axios";

/*
|--------------------------------------------------------------------------
| Axios Instance
|--------------------------------------------------------------------------
| Ready for future Node.js + Express + MongoDB backend integration.
|
| Example:
| Base URL:
| http://localhost:5000/api
|
*/

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api",

  timeout: 15000,

  headers: {
    "Content-Type":
      "application/json",
  },
});

/*
|--------------------------------------------------------------------------
| Request Interceptor
|--------------------------------------------------------------------------
*/

api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem(
        "token"
      );

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  (error) =>
    Promise.reject(error)
);

/*
|--------------------------------------------------------------------------
| Response Interceptor
|--------------------------------------------------------------------------
*/

api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (
      error.response?.status ===
      401
    ) {
      console.error(
        "Unauthorized Access"
      );
    }

    if (
      error.response?.status >=
      500
    ) {
      console.error(
        "Server Error"
      );
    }

    return Promise.reject(error);
  }
);

export default api;