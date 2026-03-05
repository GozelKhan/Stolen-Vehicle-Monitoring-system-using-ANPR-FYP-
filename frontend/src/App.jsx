/**

* @file App.js
* @description
* Main routing configuration file for the Track Vision web application.
* This file defines all routes for authentication, user dashboard,
* and admin dashboard using React Router DOM.
  */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

/* Layout */
import DashboardLayout from "./layouts/MainLayout";

/* Authentication Pages */
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import VerifyOTP from "./pages/auth/VerifyOtp";

/* Common Pages */
import SubmitComplaintPage from "./pages/common/SubmitComplain";
import SearchComplaintPage from "./pages/common/SearchComplain";
import ComplaintMainPage from "./pages/common/MainComplaint";
import CameraMainPage from "./pages/common/Camera";

/* User Pages */
import Dashboard from "./pages/user/Dashboard";

/* Admin Pages */
import AdminDashboard from "./pages/admin/AdminDashboard";
import ConfigureCamera from "./pages/admin/ConfigureCamera";

/**

* Main App Component
* Handles routing for the entire application
  */
  function App() {
  return ( <BrowserRouter> <Routes>
  {/* ================= AUTHENTICATION ROUTES ================= */}

  ```
   {/* User Registration */}
   <Route path="/signup" element={<Signup />} />

   {/* User Login */}
   <Route path="/login" element={<Login />} />

   {/* Forgot Password */}
   <Route path="/forgot-password" element={<ForgotPassword />} />

   {/* OTP Verification */}
   <Route path="/verify-otp" element={<VerifyOTP />} />

   {/* Reset Password */}
   <Route path="/reset-password" element={<ResetPassword />} />

   {/* ================= USER DASHBOARD ROUTES ================= */}

   {/* Base layout for user dashboard */}
   <Route path="/user/dashboard" element={<DashboardLayout />}>
     
     {/* Default dashboard page */}
     <Route index element={<Dashboard />} />

     {/* Dashboard Home */}
     <Route path="home" element={<Dashboard />} />

     {/* Complaint main page */}
     <Route path="complain" element={<ComplaintMainPage />} />

     {/* Search complaints */}
     <Route path="complain/search" element={<SearchComplaintPage />} />

     {/* Submit new complaint */}
     <Route path="complain/submit" element={<SubmitComplaintPage />} />

     {/* Camera monitoring page */}
     <Route path="camera" element={<CameraMainPage />} />
   </Route>

   {/* ================= ADMIN DASHBOARD ROUTES ================= */}

   {/* Base layout for admin dashboard */}
   <Route path="/admin/dashboard" element={<DashboardLayout />}>

     {/* Default admin dashboard */}
     <Route index element={<AdminDashboard />} />

     {/* Admin home page */}
     <Route path="home" element={<AdminDashboard />} />

     {/* Complaint management */}
     <Route path="complain" element={<ComplaintMainPage />} />

     {/* Complaint search */}
     <Route path="complain/search" element={<SubmitComplaintPage />} />

     {/* Submit complaint */}
     <Route path="complain/submit" element={<SubmitComplaintPage />} />

     {/* Camera monitoring */}
     <Route path="camera" element={<CameraMainPage />} />

     {/* Camera configuration (admin only) */}
     <Route path="camera/configure" element={<ConfigureCamera />} />
   </Route>
  ```

     </Routes>
   </BrowserRouter>

);
}

/* Export App component */
export default App;
