/** @format */

import axios from "axios";

<<<<<<< HEAD
const API_BASE = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/";

export const registerUser = async (data) => {
  return await axios.post(`${API_BASE}signup/`, data);
};

export const loginUser = async (data) => {
  return await axios.post(`${API_BASE}login/`, data);
};

export const requestPasswordReset = async (data) => {
  return await axios.post(`${API_BASE}forgot-password/`, data);
};

export const verifyOTP = async (data) => {
  return await axios.post(`${API_BASE}verify-otp/`, data);
};

export const resetPassword = async (data) => {
  return await axios.post(`${API_BASE}reset-password/`, data);
};

export const getUser = async (email) => {
  return await axios.get(`${API_BASE}user/profile/`, {
    params: { email: email },
  });
};

export const updateProfile = async (form, email) => {
  return await axios.put(`${API_BASE}user/profile/update/`, form, email);
};
=======
// Base API URL from environment variable or fallback
const API_BASE = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/";

// Create an axios instance for reuse
const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// Handle errors globally (optional)
const handleRequest = async (request) => {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    // Optional: log or format the error
    console.error(error.response?.data || error.message);
    throw error.response?.data || error;
  }
};

// User authentication APIs
export const registerUser = (data) =>
  handleRequest(apiClient.post("signup/", data));

export const loginUser = (data) =>
  handleRequest(apiClient.post("login/", data));

export const requestPasswordReset = (data) =>
  handleRequest(apiClient.post("forgot-password/", data));

export const verifyOTP = (data) =>
  handleRequest(apiClient.post("verify-otp/", data));

export const resetPassword = (data) =>
  handleRequest(apiClient.post("reset-password/", data));
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
