const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const ENDPOINTS = {
    REGISTER: () => `${baseURL}/api/v1/register`,
    LOGIN: () => `${baseURL}/api/v1/login`,
    FORGOT_PASSWORD: () => `${baseURL}/api/v1/otp/create`,
    OTP: () => `${baseURL}/api/v1/otp/validate`,
    SET_NEW_PASSWORD: () => `${baseURL}/api/v1/password-reset`,
    MY_PROFILE: () => `${baseURL}/api/v1/user-profile`,
}