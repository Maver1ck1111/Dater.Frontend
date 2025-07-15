import axios, { AxiosError, type AxiosRequestConfig } from "axios";
import { jwtDecode } from "jwt-decode";

const api = axios.create({
    baseURL: "https://localhost:7278/"
})

api.interceptors.request.use(
    config => {

    const accessToken = localStorage.getItem('AccessToken');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

function getEmailFromAccessToken(): string | null{
    const token = localStorage.getItem("AccessToken");

    if(!token)
        return null;

    const decode = jwtDecode<{ email?: string }>(token);

    return decode.email || null;
}

async function refreshToken() {
    const email = getEmailFromAccessToken()

    if(!email)
        throw new Error('No email found');

    const refreshToken = localStorage.getItem("RefreshToken");

    if(!refreshToken)
        throw new Error('No refresh token found');

    const response = await api.post("/api/auth/refresh", {
        email: email,
        refreshToken: refreshToken
    });
    
    const { newAccessToken, newRefreshToken} = response.data;

    localStorage.setItem('accessToken', newAccessToken);
    localStorage.setItem('refreshToken', newRefreshToken);

    return refreshToken;
} 

api.interceptors.response.use(
    response => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

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
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            window.location.href = '/register';
            return Promise.reject(refreshError);
        }
    }

    return Promise.reject(error);
  }
)

export default api;