/** @format */

import axios from "axios";

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
