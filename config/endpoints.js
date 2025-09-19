const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const ENDPOINTS = {
    REGISTER: () => `${baseURL}/auth/register`,
    LOGIN: () => `${baseURL}/auth/login`,
    FORGOT_PASSWORD: () => `${baseURL}/auth/otp/create`,
    OTP: () => `${baseURL}/auth/otp/validate`,
    SET_NEW_PASSWORD: () => `${baseURL}/auth/password-reset`,
    MY_PROFILE: () => `${baseURL}/auth/user-profile`,
    GENERAL_INFO: () => `${baseURL}/pages/general-info`,
    ABOUT: () => `${baseURL}/pages/about`,
    BRANDS: () => `${baseURL}/pages/brands`,
    FAQS: () => `${baseURL}/pages/faqs`,
    TERM_OF_USE: () => `${baseURL}/pages/terms-conditions`,
    STORE_PRODUCTS: () => `${baseURL}/store/products`,
}