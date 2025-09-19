import axios from "axios";

const getToken = () => {
    if (typeof window !== "undefined") {
        return sessionStorage.getItem("access_token");
    }
    return null;
};

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

if (typeof window !== "undefined") {
    instance.interceptors.request.use(
        (config) => {
            const token = getToken();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );
}

export const REQUEST = {
    get: (url) => instance.get(url).then((res) => res.data),
    post: (url, data) => instance.post(url, data).then((res) => res.data),
    put: (url, data) => instance.put(url, data).then((res) => res.data),
    patch: (url, data) => instance.patch(url, data).then((res) => res.data),
    delete: (url) => instance.delete(url).then((res) => res.data),
};
