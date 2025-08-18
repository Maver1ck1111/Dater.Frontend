import axios, { AxiosError, type AxiosRequestConfig } from "axios";
import { jwtDecode } from "jwt-decode";

const api = axios.create({
  baseURL: "http://localhost:7070/",
});

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("AccessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

function getEmailFromAccessToken(): string | null {
  const token = localStorage.getItem("AccessToken");

  if (!token) return null;

  const decode: any = jwtDecode(token);

  return (
    decode[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
    ] || null
  );
}

async function refreshToken() {
  const email = getEmailFromAccessToken();

  if (!email) throw new Error("No email found");

  const currentRefreshToken = localStorage.getItem("RefreshToken");

  if (!currentRefreshToken) throw new Error("No refresh token found");

  const response = await api.post("/refresh", {
    email: email,
    refreshToken: currentRefreshToken,
  });

  const { accessToken, refreshToken } = response.data;

  localStorage.setItem("AccessToken", accessToken);
  localStorage.setItem("RefreshToken", refreshToken);

  return refreshToken;
}

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (originalRequest.url === "/refresh") {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshToken();

        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${newAccessToken}`,
        };

        return await api(originalRequest);
      } catch (refreshError) {
        //localStorage.removeItem("AccessToken");
        //localStorage.removeItem("RefreshToken");
        //window.location.href = "/register";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
